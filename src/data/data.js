export const ToDOList =[
    {
        id:1,
        checked: false,
        task: "clean the house"
    },
    {
        id:2,
        checked: false,
        task: "wash dishes"
    },
    {
        id:3,
        checked: false,
        task: "meal prep"
    }
]

// Function to filter out a specific task
const filterTask = (taskName) => {
    return ToDOList.filter(item => item.task !== taskName);
}

// Example usage to filter out the task "wash dishes"
const filteredList = filterTask("wash dishes");

console.log(filteredList);