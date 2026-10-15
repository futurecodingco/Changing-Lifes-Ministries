/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const DB_NAME = 'clm_media_store';
const STORE_NAME = 'images';
const LOCAL_STORAGE_KEY = 'clm_uploaded_scenes';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      return reject(new Error('IndexedDB not supported'));
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Loads all stored images combining localStorage and IndexedDB
 */
export async function loadStoredImages(): Promise<Record<string, string>> {
  const images: Record<string, string> = {};

  // 1. Synchronously read from localStorage for instant display
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        Object.assign(images, parsed);
      }
    }
  } catch (err) {
    console.warn('LocalStorage read notice:', err);
  }

  // 2. Read from IndexedDB (preserves high-res images exceeding 5MB localStorage limit)
  try {
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const getAllKeysRequest = store.getAllKeys();
    const getAllValuesRequest = store.getAll();

    await new Promise<void>((resolve, reject) => {
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error);
    });

    const keys = getAllKeysRequest.result;
    const values = getAllValuesRequest.result;

    if (keys && values) {
      for (let i = 0; i < keys.length; i++) {
        const key = String(keys[i]);
        const val = values[i];
        if (typeof val === 'string' && val.length > 0) {
          images[key] = val;
        }
      }
    }
  } catch (err) {
    console.warn('IndexedDB read notice:', err);
  }

  return images;
}

/**
 * Permanently saves an image to both IndexedDB and localStorage
 */
export async function persistImage(filename: string, dataUrl: string): Promise<void> {
  // 1. Save to IndexedDB (durable, large capacity)
  try {
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    store.put(dataUrl, filename);
  } catch (err) {
    console.warn('IndexedDB write notice:', err);
  }

  // 2. Mirror in localStorage (if size allows)
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsed: Record<string, string> = raw ? JSON.parse(raw) : {};
    parsed[filename] = dataUrl;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(parsed));
  } catch (err) {
    // Expected fallback if localStorage exceeds 5MB quota; IndexedDB protects the data
    console.warn('LocalStorage quota notice, safely preserved in IndexedDB:', err);
  }
}
