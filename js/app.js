// app.js for 4grade-app

// Navigation logic 
document.addEventListener('DOMContentLoaded', () => {    
    const navLinks = document.querySelectorAll('nav a');    

    navLinks.forEach(link => {        
        link.addEventListener('click', smoothScroll);    });
});

function smoothScroll(e) {    
    e.preventDefault();    
    const targetId = e.currentTarget.getAttribute('href').substring(1);    
    const targetElement = document.getElementById(targetId);
    
    window.scrollTo({        
        top: targetElement.offsetTop,        
        behavior: 'smooth'    
    });
}

// ProgressTracker class for tracking completed exercises
class ProgressTracker {    
    constructor() {        
        this.storageKey = 'completedExercises';        
        this.completedExercises = this.getCompletedExercises();    }

    getCompletedExercises() {        
        const data = localStorage.getItem(this.storageKey);        
        return data ? JSON.parse(data) : [];    }

    addExercise(exerciseId) {        
        if (!this.completedExercises.includes(exerciseId)) {            
            this.completedExercises.push(exerciseId);            
            this.save();        }    }

    save() {        
        localStorage.setItem(this.storageKey, JSON.stringify(this.completedExercises));
    }

    isCompleted(exerciseId) {        
        return this.completedExercises.includes(exerciseId);
    }
} 

// Example usage of ProgressTracker
const tracker = new ProgressTracker();

// Function to mark an exercise as complete
function markExerciseComplete(exerciseId) {    
    tracker.addExercise(exerciseId);    
    console.log(`Exercise ${exerciseId} completed!`);
}