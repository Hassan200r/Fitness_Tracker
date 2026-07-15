import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import './WorkoutTracker.css';

export default function WorkoutTracker() {
  const [exercises, setExercises] = useState([
    { id: 1, name: '', sets: '', reps: '', weight: '' }
  ]);
  const [workoutName, setWorkoutName] = useState('');
  
  const addExercise = () => {
    setExercises([
      ...exercises, 
      { id: Date.now(), name: '', sets: '', reps: '', weight: '' }
    ]);
  };

  const removeExercise = (id) => {
    if (exercises.length > 1) {
      setExercises(exercises.filter(ex => ex.id !== id));
    }
  };

  const updateExercise = (id, field, value) => {
    setExercises(exercises.map(ex => 
      ex.id === id ? { ...ex, [field]: value } : ex
    ));
  };

  const saveWorkout = (e) => {
    e.preventDefault();
    console.log({ name: workoutName, exercises });
    // In a real app, this would save to Firestore
    alert('Workout saved successfully! (Mock)');
  };

  return (
    <div className="page-container">
      <div className="workout-header">
        <div>
          <h1 className="heading-1">Track Workout</h1>
          <p className="text-secondary">Log your exercises and sets</p>
        </div>
        <button onClick={saveWorkout} className="btn-primary">
          Save Workout
        </button>
      </div>

      <div className="card glassmorphism workout-card">
        <div className="input-group">
          <label htmlFor="workoutName">Workout Name</label>
          <input 
            type="text" 
            id="workoutName" 
            placeholder="e.g., Upper Body Power"
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
          />
        </div>

        <div className="exercises-list">
          <h2 className="heading-2" style={{ marginTop: '2rem' }}>Exercises</h2>
          
          {exercises.map((exercise, index) => (
            <div key={exercise.id} className="exercise-row">
              <div className="exercise-number">{index + 1}</div>
              
              <div className="exercise-inputs">
                <div className="input-group" style={{ flex: 2 }}>
                  <label>Exercise</label>
                  <input 
                    type="text" 
                    placeholder="Bench Press"
                    value={exercise.name}
                    onChange={(e) => updateExercise(exercise.id, 'name', e.target.value)}
                  />
                </div>
                
                <div className="input-group" style={{ flex: 1 }}>
                  <label>Sets</label>
                  <input 
                    type="number" 
                    placeholder="3"
                    value={exercise.sets}
                    onChange={(e) => updateExercise(exercise.id, 'sets', e.target.value)}
                  />
                </div>
                
                <div className="input-group" style={{ flex: 1 }}>
                  <label>Reps</label>
                  <input 
                    type="number" 
                    placeholder="10"
                    value={exercise.reps}
                    onChange={(e) => updateExercise(exercise.id, 'reps', e.target.value)}
                  />
                </div>
                
                <div className="input-group" style={{ flex: 1 }}>
                  <label>Weight (lbs)</label>
                  <input 
                    type="number" 
                    placeholder="135"
                    value={exercise.weight}
                    onChange={(e) => updateExercise(exercise.id, 'weight', e.target.value)}
                  />
                </div>
              </div>
              
              <button 
                type="button" 
                className="btn-delete"
                onClick={() => removeExercise(exercise.id)}
                disabled={exercises.length === 1}
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        <button 
          type="button" 
          onClick={addExercise} 
          className="btn-secondary btn-add-exercise"
        >
          <Plus size={20} />
          Add Exercise
        </button>
      </div>
    </div>
  );
}
