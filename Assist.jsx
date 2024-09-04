const { useState } = require("react");
const { search } = require("../Backend");

const [properties, setProperties] = useState([])
const filterProperties = () => {
  const filtered = properties;
  if (search) {
    filtered = filtered.filter(property => property.title.toLowercase().includes(search.toLowercase())) || property.location.toLowercase().includes(search.tolowercase());
  }
  if (minRent) {
    filtered = filtered.filter(property => parseInt(property.minRent) >= parseInt(minRent));
  }
  if(maxRent){
    filtered=filtered.filter(property=> perseInt(property.maxRent) <= parseInt(maxRent) )
  }
  if(bed){
    filtered=filtered.filter(property=> parseInt(property.bed)=== parseInt(bed))
  }
  if(bath){
    filtered=filtered.filter(property=> parseInt(property.bath)=== parseInt(bath));
  }
}