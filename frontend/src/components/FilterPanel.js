import React, { useState, useEffect } from 'react';
import '../styles/FilterPanel.css'; // Assuming you create this CSS file

function FilterPanel({ onFilterChange, currentFilters, uniqueTypes, uniqueAbilities, uniqueGenerations, uniqueEggGroups }) {
  const [showFilters, setShowFilters] = useState(false); // State for toggling filter visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ [name]: value });
  };

  const handleClearFilters = () => {
    onFilterChange({
      name: '', type: '', ability: '', generation: '', eggGroup: '',
      minHp: '', maxHp: '', minAttack: '', maxAttack: '', minDefense: '', maxDefense: '',
      minSpAtk: '', maxSpAtk: '', minSpDef: '', maxSpDef: '', minSpeed: '', maxSpeed: '',
      minWeight: '', maxWeight: '', minHeight: '', maxHeight: '',
    });
  };

  return (
    <div className="filter-panel-container">
      <button className="toggle-filters-button" onClick={() => setShowFilters(!showFilters)}>
        {showFilters ? 'Hide Filters' : 'Show Filters'}
      </button>

      {showFilters && (
        <div className="filter-panel">
          <div className="filter-group">
            <label htmlFor="type">Type:</label>
            <select name="type" id="type" value={currentFilters.type} onChange={handleChange}>
              <option value="">All Types</option>
              {uniqueTypes.map(type => (
                <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="ability">Ability:</label>
            <select name="ability" id="ability" value={currentFilters.ability} onChange={handleChange}>
              <option value="">All Abilities</option>
              {uniqueAbilities.map(ability => (
                <option key={ability} value={ability}>{ability.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="generation">Generation:</label>
            <select name="generation" id="generation" value={currentFilters.generation} onChange={handleChange}>
              <option value="">All Generations</option>
              {uniqueGenerations.map(gen => (
                <option key={gen} value={gen}>{gen}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="eggGroup">Egg Group:</label>
            <select name="eggGroup" id="eggGroup" value={currentFilters.eggGroup} onChange={handleChange}>
              <option value="">All Egg Groups</option>
              {uniqueEggGroups.map(group => (
                <option key={group} value={group}>{group.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</option>
              ))}
            </select>
          </div>

          {/* Stat Filters */}
          <div className="filter-group stat-filters">
            <label>HP:</label>
            <input type="number" name="minHp" placeholder="Min" value={currentFilters.minHp} onChange={handleChange} />
            <input type="number" name="maxHp" placeholder="Max" value={currentFilters.maxHp} onChange={handleChange} />
          </div>
          <div className="filter-group stat-filters">
            <label>Attack:</label>
            <input type="number" name="minAttack" placeholder="Min" value={currentFilters.minAttack} onChange={handleChange} />
            <input type="number" name="maxAttack" placeholder="Max" value={currentFilters.maxAttack} onChange={handleChange} />
          </div>
          <div className="filter-group stat-filters">
            <label>Defense:</label>
            <input type="number" name="minDefense" placeholder="Min" value={currentFilters.minDefense} onChange={handleChange} />
            <input type="number" name="maxDefense" placeholder="Max" value={currentFilters.maxDefense} onChange={handleChange} />
          </div>
          <div className="filter-group stat-filters">
            <label>Sp. Atk:</label>
            <input type="number" name="minSpAtk" placeholder="Min" value={currentFilters.minSpAtk} onChange={handleChange} />
            <input type="number" name="maxSpAtk" placeholder="Max" value={currentFilters.maxSpAtk} onChange={handleChange} />
          </div>
          <div className="filter-group stat-filters">
            <label>Sp. Def:</label>
            <input type="number" name="minSpDef" placeholder="Min" value={currentFilters.minSpDef} onChange={handleChange} />
            <input type="number" name="maxSpDef" placeholder="Max" value={currentFilters.maxSpDef} onChange={handleChange} />
          </div>
          <div className="filter-group stat-filters">
            <label>Speed:</label>
            <input type="number" name="minSpeed" placeholder="Min" value={currentFilters.minSpeed} onChange={handleChange} />
            <input type="number" name="maxSpeed" placeholder="Max" value={currentFilters.maxSpeed} onChange={handleChange} />
          </div>

          {/* Height and Weight Filters */}
          <div className="filter-group stat-filters">
            <label>Weight (kg):</label>
            <input type="number" name="minWeight" placeholder="Min" value={currentFilters.minWeight} onChange={handleChange} step="0.1"/>
            <input type="number" name="maxWeight" placeholder="Max" value={currentFilters.maxWeight} onChange={handleChange} step="0.1"/>
          </div>
          <div className="filter-group stat-filters">
            <label>Height (m):</label>
            <input type="number" name="minHeight" placeholder="Min" value={currentFilters.minHeight} onChange={handleChange} step="0.1"/>
            <input type="number" name="maxHeight" placeholder="Max" value={currentFilters.maxHeight} onChange={handleChange} step="0.1"/>
          </div>

          <button className="clear-filters-button" onClick={handleClearFilters}>Clear Filters</button>
        </div>
      )}
    </div>
  );
}

export default FilterPanel;
