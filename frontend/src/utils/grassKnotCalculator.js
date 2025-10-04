// This utility is primarily for reference, as the Grass Knot power is
// pre-calculated and stored in pokemon_data.json by the Python script.
// However, if you ever needed to calculate it dynamically on the frontend,
// this is how it would look.

/**
 * Calculates Grass Knot power based on weight in kilograms.
 * @param {number} weight_kg - The Pokémon's weight in kilograms.
 * @returns {number} The power of the Grass Knot move.
 */
export function calculateGrassKnotPower(weight_kg) {
    if (weight_kg < 10) {
        return 20;
    } else if (weight_kg < 25) {
        return 40;
    } else if (weight_kg < 50) {
        return 60;
    } else if (weight_kg < 100) {
        return 80;
    } else if (weight_kg < 200) {
        return 100;
    } else { // weight_kg >= 200
        return 120;
    }
}
