import { browser } from '$app/environment';
import type { GlossaryPinGroup } from '$lib/types/glossary';
import { glossaryPins } from '$lib/data/glossary-pin-groups';

const STORAGE_KEY = 'sarir-glossary-unlocked';

function readStored(): Set<GlossaryPinGroup> {
	if (!browser) return new Set();
	try {
		const raw = sessionStorage.getItem(STORAGE_KEY);
		if (!raw) return new Set();
		const parsed = JSON.parse(raw) as unknown;
		if (!Array.isArray(parsed)) return new Set();
		return new Set(
			parsed.filter((n): n is GlossaryPinGroup => n === 1 || n === 2 || n === 3)
		);
	} catch {
		return new Set();
	}
}

function writeStored(groups: Set<GlossaryPinGroup>) {
	if (!browser) return;
	sessionStorage.setItem(STORAGE_KEY, JSON.stringify([...groups]));
}

export function loadUnlockedGroups(): Set<GlossaryPinGroup> {
	return readStored();
}

export function isGroupUnlocked(
	group: GlossaryPinGroup | null,
	unlocked: Set<GlossaryPinGroup>
): boolean {
	if (group === null) return true;
	return unlocked.has(group);
}

export function tryUnlockPin(
	pin: string,
	unlocked: Set<GlossaryPinGroup>
): { ok: true; group: GlossaryPinGroup } | { ok: false } {
	const trimmed = pin.trim();
	const match = glossaryPins.find((p) => p.pin === trimmed);
	if (!match) return { ok: false };
	const next = new Set(unlocked);
	next.add(match.group);
	writeStored(next);
	return { ok: true, group: match.group };
}
