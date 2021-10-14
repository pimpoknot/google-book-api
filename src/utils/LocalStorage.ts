export function handleSubmitName(event: any) {
    if (typeof window !== 'undefined') {
        localStorage.setItem("name", event.target.value)
    }
    
}