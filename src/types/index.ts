/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageRoute = '/' | '/about' | '/programs' | '/events' | '/leadership' | '/contact' | '/donate' | '/tribute';

export interface MinistryEvent {
  id: number;
  storageKey: string;
  title: string;
  badge: string;
  shortTitle: string;
  date: string;
  location: string;
  themeVerse?: string;
  attributes: { label: string; value: string }[];
  summary: string;
  extendedStory?: string;
  defaultImage?: string;
}

export interface LeaderProfile {
  name: string;
  role: string;
  phone: string;
  email?: string;
  notes?: string;
  quote?: string;
}
