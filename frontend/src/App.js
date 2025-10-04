import React, { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';
import FilterPanel from './components/FilterPanel';
import SearchBar from './components/SearchBar';
import './styles/App.css';

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [filters, setFilters] = useState({
    name: '',
    type: '',
    ability: '',
    generation: '',
    eggGroup: '',
    minHp: '', maxHp: '',
    minAttack: '', maxAttack: '',
    minDefense: '', maxDefense: '',
    minSpAtk: '', maxSpAtk: '',
    minSpDef: '', maxSpDef: '',
    minSpeed: '', maxSpeed: '',
    minWeight: '', maxWeight: '',
    minHeight: '', maxHeight: '',
  });

  useEffect(() => {
    // Load data from the JSON file
    // In a production environment, you might serve this JSON from an API
    // or a static CDN. For local development, it can be accessed directly.
    fetch('/data/pokemon_data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setAllPokemon(data);
        setFilteredPokemon(data);
      })
      .catch(error => {
        console.error("Error loading Pokémon data:", error);
        // Provide a user-friendly message or fallback in UI
      });
  }, []);

  useEffect(() => {
    let currentFiltered = allPokemon;

    // Apply name filter
    if (filters.name) {
      currentFiltered = currentFiltered.filter(p =>
        p.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }

    // Apply type filter
    if (filters.type) {
      currentFiltered = currentFiltered.filter(p =>
        p.types.includes(filters.type.toLowerCase())
      );
    }

    // Apply ability filter
    if (filters.ability) {
      currentFiltered = currentFiltered.filter(p =>
        p.abilities.some(a => a.name.toLowerCase().includes(filters.ability.toLowerCase()))
      );
    }

    // Apply generation filter
    if (filters.generation) {
        currentFiltered = currentFiltered.filter(p =>
            p.generation.toLowerCase() === filters.generation.toLowerCase()
        );
    }

    // Apply egg group filter
    if (filters.eggGroup) {
        currentFiltered = currentFiltered.filter(p =>
            p.egg_groups.some(eg => eg.toLowerCase().includes(filters.eggGroup.toLowerCase()))
        );
    }

    // Apply stat filters
    if (filters.minHp) {
      currentFiltered = currentFiltered.filter(p => p.base_stats.hp >= parseInt(filters.minHp));
    }
    if (filters.maxHp) {
      currentFiltered = currentFiltered.filter(p => p.base_stats.hp <= parseInt(filters.maxHp));
    }
    if (filters.minAttack) {
        currentFiltered = currentFiltered.filter(p => p.base_stats.attack >= parseInt(filters.minAttack));
    }
    if (filters.maxAttack) {
        currentFiltered = currentFiltered.filter(p => p.base_stats.attack <= parseInt(filters.maxAttack));
    }
    if (filters.minDefense) {
        currentFiltered = currentFiltered.filter(p => p.base_stats.defense >= parseInt(filters.minDefense));
    }
    if (filters.maxDefense) {
        currentFiltered = currentFiltered.filter(p => p.base_stats.defense <= parseInt(filters.maxDefense));
    }
    if (filters.minSpAtk) {
        currentFiltered = currentFiltered.filter(p => p.base_stats.sp_atk >= parseInt(filters.minSpAtk));
    }
    if (filters.maxSpAtk) {
        currentFiltered = currentFiltered.filter(p => p.base_stats.sp_atk <= parseInt(filters.maxSpAtk));
    }
    if (filters.minSpDef) {
        currentFiltered = currentFiltered.filter(p => p.base_stats.sp_def >= parseInt(filters.minSpDef));
    }
    if (filters.maxSpDef) {
        currentFiltered = currentFiltered.filter(p => p.base_stats.sp_def <= parseInt(filters.maxSpDef));
    }
    if (filters.minSpeed) {
        currentFiltered = currentFiltered.filter(p => p.base_stats.speed >= parseInt(filters.minSpeed));
    }
    if (filters.maxSpeed) {
        currentFiltered = currentFiltered.filter(p => p.base_stats.speed <= parseInt(filters.maxSpeed));
    }

    // Apply height/weight filters (remember they are in dm/hg)
    if (filters.minWeight) {
        currentFiltered = currentFiltered.filter(p => p.weight_hg / 10 >= parseFloat(filters.minWeight));
    }
    if (filters.maxWeight) {
        currentFiltered = currentFiltered.filter(p => p.weight_hg / 10 <= parseFloat(filters.maxWeight));
    }
    if (filters.minHeight) {
        currentFiltered = currentFiltered.filter(p => p.height_dm / 10 >= parseFloat(filters.minHeight));
    }
    if (filters.maxHeight) {
        currentFiltered = currentFiltered.filter(p => p.height_dm / 10 <= parseFloat(filters.maxHeight));
    }


    setFilteredPokemon(currentFiltered);
  }, [filters, allPokemon]);

  const handleFilterChange = (newFilters) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  };

  // Extract unique values for dynamic filter options
  const getUniqueValues = (key, isNested = false, nestedKey = '') => {
    const values = new Set();
    allPokemon.forEach(p => {
      if (isNested) {
        p[key].forEach(item => values.add(item[nestedKey] || item)); // For abilities and egg groups
      } else if (Array.isArray(p[key])) { // For types
        p[key].forEach(item => values.add(item));
      } else { // For generation
        values.add(p[key]);
      }
    });
    return Array.from(values).sort();
  };

  const uniqueTypes = getUniqueValues('types');
  const uniqueAbilities = getUniqueValues('abilities', true, 'name'); // 'name' for ability object
  const uniqueGenerations = getUniqueValues('generation');
  const uniqueEggGroups = getUniqueValues('egg_groups');


  return (
    <div className="App">
      <header className="app-header">
        <h1>Pokémon Database</h1>
      </header>

      <div className="controls-container">
        <SearchBar onSearch={name => handleFilterChange({ name })} />
        <FilterPanel
          onFilterChange={handleFilterChange}
          currentFilters={filters}
          uniqueTypes={uniqueTypes}
          uniqueAbilities={uniqueAbilities}
          uniqueGenerations={uniqueGenerations}
          uniqueEggGroups={uniqueEggGroups}
        />
      </div>

      <div className="pokemon-grid">
        {filteredPokemon.length > 0 ? (
          filteredPokemon.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <p className="no-results">No Pokémon found matching your filters.</p>
        )}
      </div>
    </div>
  );
}

export default App;
