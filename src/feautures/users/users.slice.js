import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [
        { id: 101, name: "Gago", gender: "male", salary: 150000 },
        { id: 102, name: "Anna", gender: "fmale", salary: 350000 },
        { id: 103, name: "Sona", gender: "female", salary: 500000 },
        { id: 104, name: "Ermest", gender: "male", salary: 250000 }
    ]
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        salaryUp: function (state, action) {
            const person = state.users.find(user => user.id == action.payload);
            if (person) {
                person.salary += 50000
            }
        },
        salaryDown: function (state, action) {
            const person = state.users.find(user => user.id == action.payload)
            if (person) {
                if (person.salary > 50000) {
                    person.salary -= 50000
                }
            }
        },
        deleteUser: function (state, action) {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
        swipeUp: (state, action) => {
            const userIndex = state.users.findIndex(user => user.id === action.payload);
            if (userIndex > 0) {
                const user = state.users[userIndex];
                [state.users[userIndex], state.users[userIndex - 1]] = [state.users[userIndex - 1], state.users[userIndex]];
            }
        },
        swipeDown: (state, action) => {
            const userIndex = state.users.findIndex(user => user.id === action.payload);
            if (userIndex < state.users.length - 1) {
                const user = state.users[userIndex];
                [state.users[userIndex], state.users[userIndex + 1]] = [state.users[userIndex + 1], state.users[userIndex]];
            }
        }
    }
})

export const reducer = userSlice.reducer
export const { salaryUp } = userSlice.actions
export const { salaryDown } = userSlice.actions
export const { deleteUser } = userSlice.actions
export const { swipeDown } = userSlice.actions
export const { swipeUp } = userSlice.actions
