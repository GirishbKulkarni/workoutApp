import { useAppData } from './hooks/useAppData'
import Header from './components/Header'
import AttendanceTracker from './components/AttendanceTracker'
import WorkoutCard from './components/WorkoutCard'
import ExerciseList from './components/ExerciseList'
import ProgressSnapshot from './components/ProgressSnapshot'
import './App.css'

  if (!data) return <div style={{ color: 'white', padding: '2rem' }}>Loading application...</div>;

  return (
    <div className="app-container" style={{ 
      maxWidth: '600px', 
      margin: '0 auto', 
      padding: '1rem',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <div>
        <Header userName={data.userProfile.name} />
        <AttendanceTracker 
          attendanceLog={data.attendanceLog} 
          onToggleAttendance={updateAttendance} 
        />
      </div>

      {/* US2: Today's Workout Overview */}
      <WorkoutCard todayWorkout={data.todayWorkout} />

      {/* US3: Exercise Execution */}
      <ExerciseList 
        exercises={data.exercises} 
        onToggleExercise={updateExercise} 
      />

      {/* US4: Progress Snapshot */}
      <ProgressSnapshot userProfile={data.userProfile} />
    </div>
  )
}

export default App
