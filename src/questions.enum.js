import Enum from 'enum';

const questions = new Enum({
    SADNESS: {
        id: 1,
        name: 'Tristeza',
    },
    PESSIMISM: {
        id: 2,
        name: 'Pesimismo',
    },
    FAILURE: {
        id: 3,
        name: 'Fracaso',
    },
    LOSS_OF_PLEASURE: {
        id: 4,
        name: 'Perdida de placer',
    },
    FEELINGS_OF_GUILT: {
        id: 5,
        name: 'Sentimientos de culpa',
    },
    FEELINGS_OF_PUNISHMENT: {
        id: 6,
        name: 'Sentimientos de castigo',
    },
    DISSATISFACTION_WITH_ONESELF: {
        id: 7,
        name: 'Disconformidad con uno mismo',
    },
    SELF_CRITICISM: {
        id: 8,
        name: 'Autocritica',
    },
    SUICIDAL_THOUGHTS_OR_DESIRES: {
        id: 9,
        name: 'Pensamientos o deseos suicidas',
    },
    CRYING: {
        id: 10,
        name: 'Llanto',
    },
    AGITATION: {
        id: 11,
        name: 'Agitación',
    },
    LOSS_OF_INTEREST: {
        id: 12,
        name: 'Perdida de interés',
    },
    INDECISION: {
        id: 13,
        name: 'Indecisión',
    },
    DEVALUATION: {
        id: 14,
        name: 'Desvalorización',
    },
    POWER_LOSS: {
        id: 15,
        name: 'Perdida de energía',
    },
    CHANGES_IN_SLEEP_HABITS: {
        id: 16,
        name: 'Cambios en hábitos de sueño',
    },
    IRRITABILITY: {
        id: 17,
        name: 'Irritabilidad',
    },
    CHANGES_IN_APPETITE: {
        id: 18,
        name: 'Cambios en el apetito',
    },
    CONCENTRATION_DIFFICULTY: {
        id: 19,
        name: 'Dificultad de concentración',
    },
    TIREDNESS_OR_FATIGUE: {
        id: 20,
        name: 'Cansancio o fatiga',
    },
    LOSS_OF_INTEREST_IN_SEX: {
        id: 21,
        name: 'Pérdida de interés en el sexo',
    },
});

export default questions;
