import Enum from 'enum';
import questions from './questions.enum';

const answers = new Enum({
    NOT_SAD: {
        id: 1,
        name: 'No me siento triste',
        question: questions.SADNESS.value.id,
        value: 0,
        order: 0,
    },
    SAD_MOST_OF_THE_TIME: {
        id: 2,
        name: 'Me siento triste gran parte del tiempo',
        question: questions.SADNESS.value.id,
        value: 1,
        order: 1,
    },
    SAD_ALL_THE_TIME: {
        id: 3,
        name: 'Me siento triste todo el tiempo',
        question: questions.SADNESS.value.id,
        value: 2,
        order: 2,
    },
    SAD_AND_UNHAPPY: {
        id: 4,
        name: 'Me siento tan triste o soy tan infeliz que no puedo soportarlo',
        question: questions.SADNESS.value.id,
        value: 3,
        order: 3,
    },
    NOT_DISCOURAGED: {
        id: 5,
        name: 'No estoy desalentado respecto del mi futuro.',
        question: questions.PESSIMISM.value.id,
        value: 0,
        order: 0,
    },
    DISCOURAGED: {
        id: 6,
        name: 'Me siento más desalentado respecto de mi futuro que lo que solía estarlo.',
        question: questions.PESSIMISM.value.id,
        value: 1,
        order: 1,
    },
    NOT_EXPECT_GOOD_THINGS: {
        id: 7,
        name: 'No espero que las cosas funcionen para mi.',
        question: questions.PESSIMISM.value.id,
        value: 2,
        order: 2,
    },
    NO_HOPE_FOR_MY_FUTURE: {
        id: 8,
        name: 'Siento que no hay esperanza para mi futuro y que sólo puede empeorar. ',
        question: questions.PESSIMISM.value.id,
        value: 3,
        order: 3,
    },
    NOT_FEEL_A_FAILURE: {
        id: 9,
        name: 'No me siento como un fracasado.',
        question: questions.FAILURE.value.id,
        value: 0,
        order: 0,
    },
    FAILED_MORE_THAN_SHOULD: {
        id: 10,
        name: 'He fracasado más de lo que hubiera debido.',
        question: questions.FAILURE.value.id,
        value: 1,
        order: 1,
    },
    LOOK_BACK_MANY_FAILURES: {
        id: 11,
        name: 'Cuando miro hacia atrás, veo muchos fracasos.',
        question: questions.FAILURE.value.id,
        value: 2,
        order: 2,
    },
    TOTAL_FAILURE: {
        id: 12,
        name: 'Siento que como persona soy un fracaso total.',
        question: questions.FAILURE.value.id,
        value: 3,
        order: 3,
    },
    PLEASURE_AS_ALWAYS: {
        id: 13,
        name: 'Obtengo tanto placer como siempre por las cosas de las que disfruto.',
        question: questions.LOSS_OF_PLEASURE.value.id,
        value: 0,
        order: 0,
    },
    NOT_MUCH_PLEASURE_AS_BEFORE: {
        id: 14,
        name: 'No disfruto tanto de las cosas como solía hacerlo.',
        question: questions.LOSS_OF_PLEASURE.value.id,
        value: 1,
        order: 1,
    },
    VERY_LITTLE_PLEASURE: {
        id: 15,
        name: 'Obtengo muy poco placer de las cosas que solía disfrutar.',
        question: questions.LOSS_OF_PLEASURE.value.id,
        value: 2,
        order: 2,
    },
    NO_PLEASURE: {
        id: 16,
        name: 'No puedo obtener ningún placer de las cosas de las que solía disfrutar.',
        question: questions.LOSS_OF_PLEASURE.value.id,
        value: 3,
        order: 3,
    },
    NOT_FEEL_GUILTY: {
        id: 17,
        name: 'No me siento particularmente culpable.',
        question: questions.FEELINGS_OF_GUILT.value.id,
        value: 0,
        order: 0,
    },
    LITTLE_GUILTY: {
        id: 18,
        name: 'Me siento culpable respecto de varias cosas que he hecho o que debería haber hecho.',
        question: questions.FEELINGS_OF_GUILT.value.id,
        value: 1,
        order: 1,
    },
    PRETTY_GUILTY: {
        id: 19,
        name: 'Me siento bastante culpable la mayor parte del tiempo.',
        question: questions.FEELINGS_OF_GUILT.value.id,
        value: 2,
        order: 2,
    },
    TOTALLY_GUILTY: {
        id: 20,
        name: 'Me siento culpable todo el tiempo.',
        question: questions.FEELINGS_OF_GUILT.value.id,
        value: 3,
        order: 3,
    },
    NOT_FEEL_PUNISHED: {
        id: 21,
        name: 'No siento que este siendo castigado.',
        question: questions.FEELINGS_OF_PUNISHMENT.value.id,
        value: 0,
        order: 0,
    },
    CAN_BE_PUNISHED: {
        id: 22,
        name: 'Siento que tal vez pueda ser castigado.',
        question: questions.FEELINGS_OF_PUNISHMENT.value.id,
        value: 1,
        order: 1,
    },
    HOPE_BE_PUNISHED: {
        id: 23,
        name: 'Espero ser castigado.',
        question: questions.FEELINGS_OF_PUNISHMENT.value.id,
        value: 2,
        order: 2,
    },
    BEING_PUNISHED: {
        id: 24,
        name: 'Siento que estoy siendo castigado.',
        question: questions.FEELINGS_OF_PUNISHMENT.value.id,
        value: 3,
        order: 3,
    },
    AS_USUAL: {
        id: 25,
        name: 'Siento acerca de mi lo mismo que siempre.',
        question: questions.DISSATISFACTION_WITH_ONESELF.value.id,
        value: 0,
        order: 0,
    },
    LOST_CONFIDENCE: {
        id: 26,
        name: 'He perdido la confianza en mí mismo.',
        question: questions.DISSATISFACTION_WITH_ONESELF.value.id,
        value: 1,
        order: 1,
    },
    DISAPPOINTED_MYSELF: {
        id: 27,
        name: 'Estoy decepcionado conmigo mismo.',
        question: questions.DISSATISFACTION_WITH_ONESELF.value.id,
        value: 2,
        order: 2,
    },
    NOT_LIKE_MYSELF: {
        id: 28,
        name: 'No me gusto a mí mismo.',
        question: questions.DISSATISFACTION_WITH_ONESELF.value.id,
        value: 3,
        order: 3,
    },
    NO_CRITICIZE_MY_SELF: {
        id: 29,
        name: 'No me critico ni me culpo más de lo habitual.',
        question: questions.SELF_CRITICISM.value.id,
        value: 0,
        order: 0,
    },
    MORE_CRITICAL_MYSELF: {
        id: 30,
        name: 'Estoy más crítico conmigo mismo de lo que solía estarlo.',
        question: questions.SELF_CRITICISM.value.id,
        value: 1,
        order: 1,
    },
    CRITICIZE_MY_MISTAKES: {
        id: 31,
        name: 'Me critico a mí mismo por todos mis errores.',
        question: questions.SELF_CRITICISM.value.id,
        value: 2,
        order: 2,
    },
    BLAME_MYSELF_FOR_EVERYTING: {
        id: 32,
        name: 'Me culpo a mí mismo por todo lo malo que sucede.',
        question: questions.SELF_CRITICISM.value.id,
        value: 3,
        order: 3,
    },
    NO_SUICIDAL_THOUGHTS: {
        id: 33,
        name: 'No tengo ningún pensamiento de matarme.',
        question: questions.SUICIDAL_THOUGHTS_OR_DESIRES.value.id,
        value: 0,
        order: 0,
    },
    SUICIDAL_THOUGHTS_BUT_I_WOULDNT: {
        id: 34,
        name: 'He tenido pensamientos de matarme, pero no lo haría',
        question: questions.SUICIDAL_THOUGHTS_OR_DESIRES.value.id,
        value: 1,
        order: 1,
    },
    KILL_MYSELF: {
        id: 35,
        name: 'Querría matarme',
        question: questions.SUICIDAL_THOUGHTS_OR_DESIRES.value.id,
        value: 2,
        order: 2,
    },
    KILL_MYSELF_IF_I_HAVE_CHANCE: {
        id: 36,
        name: 'Me mataría si tuviera la oportunidad de hacerlo.',
        question: questions.SUICIDAL_THOUGHTS_OR_DESIRES.value.id,
        value: 3,
        order: 3,
    },
    NOT_CRY_MORE_THAN_USUAL: {
        id: 37,
        name: 'No lloro más de lo que solía hacerlo.',
        question: questions.CRYING.value.id,
        value: 0,
        order: 0,
    },
    CRY_MORE_THAN_USUAL: {
        id: 38,
        name: 'Lloro más de lo que solía hacerlo',
        question: questions.CRYING.value.id,
        value: 1,
        order: 1,
    },
    CRY_FOR_LITTLE_THINGS: {
        id: 39,
        name: 'Lloro por cualquier pequeñez.',
        question: questions.CRYING.value.id,
        value: 2,
        order: 2,
    },
    WANT_CRY_BUT_CAN_NOT: {
        id: 40,
        name: 'Siento ganas de llorar pero no puedo.',
        question: questions.CRYING.value.id,
        value: 3,
        order: 3,
    },
    NO_MORE_RESTLESS_OR_TENSE_THAN_USUAL: {
        id: 41,
        name: 'No estoy más inquieto o tenso que lo habitual.',
        question: questions.AGITATION.value.id,
        value: 0,
        order: 0,
    },
    MORE_RESTLESS_OR_TENSE_THAN_USUAL: {
        id: 42,
        name: 'Me siento más inquieto o tenso que lo habitual.',
        question: questions.AGITATION.value.id,
        value: 1,
        order: 1,
    },
    HARD_TO_STAY_STILL: {
        id: 43,
        name: 'Estoy tan inquieto o agitado que me es difícil quedarme quieto',
        question: questions.AGITATION.value.id,
        value: 2,
        order: 2,
    },
    ALWAYS_ON_MOVE: {
        id: 44,
        name: 'Estoy tan inquieto o agitado que tengo que estar siempre en movimiento o haciendo algo.',
        question: questions.AGITATION.value.id,
        value: 3,
        order: 3,
    },
    NOT_LOST_INTEREST: {
        id: 45,
        name: 'No he perdido el interés en otras actividades o personas.',
        question: questions.LOSS_OF_INTEREST.value.id,
        value: 0,
        order: 0,
    },
    LESS_INTERESTED_THAN_BEFORE: {
        id: 46,
        name: 'Estoy menos interesado que antes en otras personas o cosas.',
        question: questions.LOSS_OF_INTEREST.value.id,
        value: 1,
        order: 1,
    },
    LOST_ALMOST_ALL_INTEREST: {
        id: 47,
        name: 'He perdido casi todo el interés en otras personas o cosas.',
        question: questions.LOSS_OF_INTEREST.value.id,
        value: 2,
        order: 2,
    },
    DIFFICULT_INTERESTED_IN_SOMETHING: {
        id: 48,
        name: 'Me es difícil interesarme por algo.',
        question: questions.LOSS_OF_INTEREST.value.id,
        value: 3,
        order: 3,
    },
    DECISIONS_AS_USUAL: {
        id: 49,
        name: 'Tomo mis propias decisiones tan bien como siempre.',
        question: questions.INDECISION.value.id,
        value: 0,
        order: 0,
    },
    SLIGHT_DIFFICULT_TAKE_DECISIONS: {
        id: 50,
        name: 'Me resulta más difícil que de costumbre tomar decisiones',
        question: questions.INDECISION.value.id,
        value: 1,
        order: 1,
    },
    VERY_DIFFICULT_TAKE_DECISIONS: {
        id: 51,
        name: 'Encuentro mucha más dificultad que antes para tomar decisiones.',
        question: questions.INDECISION.value.id,
        value: 2,
        order: 2,
    },
    CAN_NOT_TAKE_DECISIONS: {
        id: 52,
        name: 'Tengo problemas para tomar cualquier decisión.',
        question: questions.INDECISION.value.id,
        value: 3,
        order: 3,
    },
    WORTHY_AS_ALWAYS: {
        id: 53,
        name: 'No siento que yo no sea valioso',
        question: questions.DEVALUATION.value.id,
        value: 3,
        order: 3,
    },
    LESS_WORTHY_AS_ALWAYS: {
        id: 54,
        name: 'No me considero a mi mismo tan valioso y útil como solía considerarme',
        question: questions.DEVALUATION.value.id,
        value: 3,
        order: 3,
    },
    LESS_WORTHY_COMPARED_TO_OTHERS: {
        id: 55,
        name: 'Me siento menos valioso cuando me comparo con otros.',
        question: questions.DEVALUATION.value.id,
        value: 3,
        order: 3,
    },
    WORTHY_ANYTHING: {
        id: 56,
        name: 'Siento que no valgo nada.',
        question: questions.DEVALUATION.value.id,
        value: 3,
        order: 3,
    },
    ENERGETIC_AS_ALWAYS: {
        id:57,
        name: 'Tengo tanta energía como siempre.',
        question: questions.POWER_LOSS.value.id,
        value: 0,
        order: 0,
    },
    LESS_ENERGETIC_THAN_EVER: {
        id:58,
        name: 'Tengo menos energía que la que solía tener.',
        question: questions.POWER_LOSS.value.id,
        value: 1,
        order: 1,
    },
    NOT_HAVE_ENOUGH_ENERGY: {
        id:59,
        name: 'No tengo suficiente energía para hacer demasiado',
        question: questions.POWER_LOSS.value.id,
        value: 2,
        order: 2,
    },
    NOT_HAVE_ENERGY: {
        id:60,
        name: 'No tengo energía suficiente para hacer nada.',
        question: questions.POWER_LOSS.value.id,
        value: 3,
        order: 3,
    },
    SLEEP_HABITS_AS_ALWAYS: {
        id: 61,
        name: 'No he experimentado ningún cambio en mis hábitos de sueño.',
        question: questions.CHANGES_IN_SLEEP_HABITS.value.id,
        value: 0,
        order: 0,
    },
    SLEEP_LITTLE_MORE_THAN_USUAL: {
        id: 62,
        name: 'Duermo un poco más que lo habitual.',
        question: questions.CHANGES_IN_SLEEP_HABITS.value.id,
        value: 1,
        order: 1,
    },
    SLEEP_LITTLE_LESS_THAN_USUAL: {
        id: 63,
        name: 'Duermo un poco menos que lo habitual.',
        question: questions.CHANGES_IN_SLEEP_HABITS.value.id,
        value: 1,
        order: 2,
    },
    SLEEP_MUCH_MORE_THAN_USUAL: {
        id: 64,
        name: 'Duermo mucho más que lo habitual.',
        question: questions.CHANGES_IN_SLEEP_HABITS.value.id,
        value: 2,
        order: 3,
    },
    SLEEP_MUCH_LESS_THAN_USUAL: {
        id: 65,
        name: 'Duermo mucho menos que lo habitual',
        question: questions.CHANGES_IN_SLEEP_HABITS.value.id,
        value: 2,
        order: 4,
    },
    SLEEP_ALMOST_ALL_DAY: {
        id: 66,
        name: 'Duermo la mayor parte del día',
        question: questions.CHANGES_IN_SLEEP_HABITS.value.id,
        value: 3,
        order: 5,
    },
    WAKE_UP_EARLY_CAN_NOT_SLEEP: {
        id: 67,
        name: 'Me despierto 1-2 horas más temprano y no puedo volver a dormirme',
        question: questions.CHANGES_IN_SLEEP_HABITS.value.id,
        value: 3,
        order: 6,
    },
    NOT_IRRITABLE: {
        id:68,
        name: 'No estoy tan irritable que lo habitual.',
        question: questions.IRRITABILITY.value.id,
        value: 0,
        order: 0,
    },
    LITTLE_IRRITABLE: {
        id:69,
        name: 'Estoy más irritable que lo habitual.',
        question: questions.IRRITABILITY.value.id,
        value: 1,
        order: 1,
    },
    VERY_IRRITABLE: {
        id:70,
        name: 'Estoy mucho más irritable que lo habitual.',
        question: questions.IRRITABILITY.value.id,
        value: 2,
        order: 2,
    },
    ALWAYS_IRRITATED: {
        id:71,
        name: 'Estoy irritable todo el tiempo.',
        question: questions.IRRITABILITY.value.id,
        value: 3,
        order: 3,
    },
    NO_APPETITE_CHANGE: {
        id: 72,
        name: 'No he experimentado ningún cambio en mi apetito.',
        question: questions.CHANGES_IN_APPETITE.value.id,
        value: 0,
        order: 0,
    },
    APPETITE_LITTLE_LESS_THAN_USUAL: {
        id: 73,
        name: 'Mi apetito es un poco menor que lo habitual.',
        question: questions.CHANGES_IN_APPETITE.value.id,
        value: 1,
        order: 1,
    },
    APPETITE_LITTLE_MORE_THAN_USUAL: {
        id: 74,
        name: 'Mi apetito es un poco mayor que lo habitual.',
        question: questions.CHANGES_IN_APPETITE.value.id,
        value: 1,
        order: 2,
    },
    APPETITE_MUCH_LESS_THAN_USUAL: {
        id: 75,
        name: 'Mi apetito es mucho menor que antes.',
        question: questions.CHANGES_IN_APPETITE.value.id,
        value: 2,
        order: 3,
    },
    APPETITE_MUCH_MORE_THAN_USUAL: {
        id: 76,
        name: 'Mi apetito es mucho mayor que lo habitual',
        question: questions.CHANGES_IN_APPETITE.value.id,
        value: 2,
        order: 4,
    },
    NO_APPETITE: {
        id: 77,
        name: 'No tengo apetito en absoluto.',
        question: questions.CHANGES_IN_APPETITE.value.id,
        value: 3,
        order: 5,
    },
    APPETITE_ALL_DAY: {
        id: 78,
        name: 'Quiero comer todo el día.',
        question: questions.CHANGES_IN_APPETITE.value.id,
        value: 3,
        order: 6,
    },
    CONCENTRATE_AS_USUAL: {
        id: 79,
        name: 'Puedo concentrarme tan bien como siempre.',
        question: questions.CONCENTRATION_DIFFICULTY.value.id,
        value: 0,
        order: 0,
    },
    NOT_CONCENTRATE_AS_USUAL: {
        id: 80,
        name: 'No puedo concentrarme tan bien como habitualmente',
        question: questions.CONCENTRATION_DIFFICULTY.value.id,
        value: 1,
        order: 1,
    },
    HARD_KEEP_CONCENTRATION: {
        id: 81,
        name: 'Me es difícil mantener la mente en algo por mucho tiempo.',
        question: questions.CONCENTRATION_DIFFICULTY.value.id,
        value: 2,
        order: 2,
    },
    CAN_NOT_CONCENTRATE: {
        id: 82,
        name: 'Encuentro que no puedo concentrarme en nada.',
        question: questions.CONCENTRATION_DIFFICULTY.value.id,
        value: 3,
        order: 3,
    },
    NOT_TIRED_THAN_USUAL: {
        id:83,
        name: 'No estoy más cansado o fatigado que lo habitual.',
        question: questions.TIREDNESS_OR_FATIGUE.value.id,
        value: 0,
        order: 0,
    },
    MORE_TIRED_THAN_USUAL: {
        id:84,
        name: 'Me fatigo o me canso más fácilmente que lo habitual.',
        question: questions.TIREDNESS_OR_FATIGUE.value.id,
        value: 1,
        order: 1,
    },
    TOO_TIRED: {
        id:85,
        name: 'Estoy demasiado fatigado o cansado para hacer muchas de las cosas que solía hacer.',
        question: questions.TIREDNESS_OR_FATIGUE.value.id,
        value: 2,
        order: 2,
    },
    ALWAYS_TIRED: {
        id:86,
        name: 'Estoy demasiado fatigado o cansado para hacer la mayoría de las cosas que solía hacer.',
        question: questions.TIREDNESS_OR_FATIGUE.value.id,
        value: 3,
        order: 3,
    },
    SEXUAL_INTEREST_AS_ALWAYS: {
        id: 87,
        name: 'No he notado ningún cambio reciente en mi interés por el sexo.',
        question: questions.LOSS_OF_INTEREST_IN_SEX.value.id,
        value: 0,
        order: 0,
    },
    LES_SEXUAL_INTEREST_AS_ALWAYS: {
        id: 88,
        name: 'Estoy menos interesado en el sexo de lo que solía estarlo.',
        question: questions.LOSS_OF_INTEREST_IN_SEX.value.id,
        value: 1,
        order: 1,
    },
    MUCH_LESS_INTERESED_IN_SEX: {
        id: 89,
        name: 'Estoy mucho menos interesado en el sexo.',
        question: questions.LOSS_OF_INTEREST_IN_SEX.value.id,
        value: 2,
        order: 2,
    },
    NO_SEXUAL_INTEREST: {
        id: 90,
        name: 'He perdido completamente el interés en el sexo.',
        question: questions.LOSS_OF_INTEREST_IN_SEX.value.id,
        value: 3,
        order: 3,
    },
});

export default answers;
