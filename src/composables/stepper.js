import { ref } from 'vue'

const teamFormStep = ref({
    team_name: '',
    team_alias: '',
    team_contact_person: '',
    team_contact_mobile: '',
    players: []
})
export default function registrationForm(data) {
    
    return {
        team_name,
        team_alias,
        team_contact_person,
        team_contact_mobile,
        players
    }
}

