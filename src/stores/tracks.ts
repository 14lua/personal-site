import { writable } from "svelte/store";

interface Track {
    name: string;
    filename: string;
    description: string;
    link: string;
}

interface TracksJson {
    tracks: Track[];
}

export const tracksStore = writable<TracksJson | null>(null);

import tracksData from '$lib/music/tracks.json';
tracksStore.set(tracksData);