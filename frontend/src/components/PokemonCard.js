import React, { useRef } from 'react';
import '../styles/PokemonCard.css';

function PokemonCard({ pokemon }) {
  const audioRef = useRef(null);

  const playCry = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Optional: set a default volume
      audioRef.current.play().catch(error => {
        // Autoplay policies might prevent immediate playback without user interaction
        console.warn("Failed to play audio (likely due to browser autoplay policies):", error);
      });
    }
  };

  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container" onClick={playCry} title={`Click to hear ${pokemon.name}'s cry`}>
        <img src={pokemon.image_url} alt={pokemon.name} className="pokemon-image" />
        {pokemon.cry_url && (
          <audio ref={audioRef} src={pokemon.cry_url} preload="auto" />
        )}
      </div>
      <div className="pokemon-details">
        <h3>{pokemon.name} <span className="dex-number">#{pokemon.dex_number}</span></h3>
        <p><strong>Type(s):</strong> {pokemon.types.map(type => type.charAt(0).toUpperCase() + type.slice(1)).join(', ')}</p>
        <p><strong>Ability(ies):</strong> {pokemon.abilities.map(ab => `${ab.name.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}${ab.is_hidden ? ' (Hidden)' : ''}`).join(', ')}</p>
        <div className="base-stats-grid">
          <div><strong>HP:</strong> {pokemon.base_stats.hp}</div>
          <div><strong>Attack:</strong> {pokemon.base_stats.attack}</div>
          <div><strong>Defense:</strong> {pokemon.base_stats.defense}</div>
          <div><strong>Sp. Atk:</strong> {pokemon.base_stats.sp_atk}</div>
          <div><strong>Sp. Def:</strong> {pokemon.base_stats.sp_def}</div>
          <div><strong>Speed:</strong> {pokemon.base_stats.speed}</div>
        </div>
        <p><strong>Total Stats:</strong> {pokemon.total_stats}</p>
        <p><strong>Product Stats:</strong> {pokemon.product_stats.toLocaleString()}</p>
        <p><strong>Generation:</strong> {pokemon.generation}</p>
        <p><strong>Height:</strong> {pokemon.height_dm / 10} m</p>
        <p><strong>Weight:</strong> {pokemon.weight_hg / 10} kg</p>
        <p><strong>Grass Knot Power:</strong> {pokemon.grass_knot_power}</p>
        <p><strong>Egg Group(s):</strong> {pokemon.egg_groups.map(group => group.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')).join(', ')}</p>
        <p><strong>Gender Ratio:</strong> {pokemon.gender_ratio}</p>
      </div>
    </div>
  );
}

export default PokemonCard;
