const handleSubmit=async(event)=>{
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const minRent = form.minRent.value;
    const maxRent = form.maxRent.value;
    const beds = form.beds.value;
    const baths = form.baths.value;
    const location = form.location.value;
}