import { formatHex, oklch } from "culori";
import variables from "$data/variables.json";

export const chartData = $state({
	shape: [],
	swarm: [],
	irony: [],
	child: [],
	stone: [],
	cat: []
});

export const hex = {
	purple: formatHex(oklch(variables.color.purple)),
	purpleDark: formatHex(oklch(variables.color["purple-dark"])),
	green: formatHex(oklch(variables.color.green)),
	gold: formatHex(oklch(variables.color.gold)),
	purpleLight: formatHex(oklch(variables.color["purple-light"])),
	greenLight: formatHex(oklch(variables.color["green-light"])),
	goldLight: formatHex(oklch(variables.color["gold-light"])),
	adjustedBlack: variables.color["adjusted-black"],
	adjustedWhite: variables.color["adjusted-white"]
};
