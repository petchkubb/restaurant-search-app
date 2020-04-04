import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer Nx9-ZWn0ZSaj7gizpls7APt5dCzDnK62_aB0enHyI7x0W-FvPk3t8_hFfn3NUPpKjf5oQjXk1Sfskk9tn43rhdUOn0YRNtW6Jdm7oK6ob3T2uVkOzudcrmlTZqZkXnYx'
        
    }
})