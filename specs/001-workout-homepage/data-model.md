# Data Model: Workout Homepage

## Entities

### UserProfile
```typescript
interface UserProfile {
  id: string;
  name: string;
  currentWeight: number; // in kg or lbs
  targetWeight: number;
  streakCount: number;
  totalWorkoutsCompleted: number;
  weeklyConsistency: number; // percentage 0-100
}
```

### WorkoutPlan
```typescript
interface WorkoutPlan {
  id: string;
  date: string; // ISO-8601 YYYY-MM-DD
  type: "Push" | "Pull" | "Legs" | "Cardio" | "Full Body" | "Rest";
  targetMuscles: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedDurationMins: number;
  isCompleted: boolean;
}
```

### Exercise
```typescript
interface Exercise {
  id: string;
  workoutPlanId: string;
  name: string;
  targetMuscle: string;
  sets: number;
  reps: string; // e.g., "10-12" or "To failure"
  weight: number; // target weight
  restTimerSecs: number;
  instructions: string;
  demoThumbnailUrl: string; // Placeholder initially
  isCompleted: boolean;
}
```

### AttendanceLog
```typescript
interface AttendanceLog {
  date: string; // ISO-8601 YYYY-MM-DD
  status: "Completed" | "Missed";
}
```

## State Transitions & Validation

- **Attendance**: When a user clicks the checkmark on the `WorkoutPlan` for today, an `AttendanceLog` entry is created with `status: "Completed"`.
- **Streak Logic**: The `streakCount` increments if the previous day was "Completed". If yesterday was missed and today is completed, streak resets to 1.
- **Exercise Completion**: Checking an exercise updates its `isCompleted` flag, feeding into a progress bar on the `WorkoutCard`.
