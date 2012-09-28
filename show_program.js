var program = 
[
    [
      {"slot":0, 'title':"Accueil des participants autour d'un café", "id":0}  
    ],
    [
      {"slot":0, 'title':"Session Plénière: le mot des organisateurs & Sponsor XYZ", "id":0}  
    ],
    [
      {"slot":0, 'title':"Keynote 1", "id":0}  
    ],
    [
	{"slot":"1","title":"Challenge Kanban","id":"2"},
	{"slot":"1","title":"Duo de retour d’expérience sauce aigre douce ","id":"3"},
	{"slot":"1","title":"Des mots, des maux ? Démo !","id":"7"},
	{"slot":"1","title":"Don Quichotte et Sancho testa","id":"8"},
	{"slot":"1","title":"DevOps@Kelkoo","id":"10"},
	{"slot":"1","title":"Sky Castle Game","id":"15"},
	{"slot":"1","title":"Product Owner : comment tirer toute la puissance de l'agilité","id":"16"},
	{"slot":"1","title":"Retour d’expérience : Agile contre Cycle en V : Le match","id":"17"},
	{"slot":"1","title":"Il était une fois la vie d’un Product Owner","id":"18"}
    ],
    [
        {"slot":"2","title":"Scrum à Kanban : 3 retours d’expériences","id":"21"},
        {"slot":"2","title":"Les tests et l'agilité : la vraie vie","id":"24"},
        {"slot":"2","title":"Changer pour mieux coder","id":"26"},
        {"slot":"2","title":"Différences entre approches agiles","id":"28"},
        {"slot":"2","title":"Qualité: Stop à la procrastination","id":"29"},
        {"slot":"2","title":"La fleur de lotus ou comment redynamiser vos rétrospectives","id":"30"},
        {"slot":"2","title":"La fleur de rose ou comment redynamiser vos rétrospectives","id":"31"},
        {"slot":"2","title":"La fleur de yuka ou comment redynamiser vos rétrospectives","id":"32"},
        {"slot":"2","title":"La fleur de sel ou comment redynamiser vos rétrospectives","id":"33"}
    ],
    [
      {"slot":0, 'title':"Session Plénière: le mot des organisateurs & Sponsor ABC", "id":0}  
    ],
    [
      {"slot":0, 'title':"Keynote 2", "id":0}  
    ],
     [
	{"slot":"1","title":"Challenge Kanban","id":"2"},
	{"slot":"1","title":"Duo de retour d’expérience sauce aigre douce ","id":"3"},
	{"slot":"1","title":"Des mots, des maux ? Démo !","id":"7"},
	{"slot":"1","title":"Don Quichotte et Sancho testa","id":"8"},
	{"slot":"1","title":"DevOps@Kelkoo","id":"10"},
	{"slot":"1","title":"Sky Castle Game","id":"15"},
	{"slot":"1","title":"Product Owner : comment tirer toute la puissance de l'agilité","id":"16"},
	{"slot":"1","title":"Retour d’expérience : Agile contre Cycle en V : Le match","id":"17"},
	{"slot":"1","title":"Il était une fois la vie d’un Product Owner","id":"18"}
    ],
    [
        {"slot":"2","title":"Scrum à Kanban : 3 retours d’expériences","id":"21"},
        {"slot":"2","title":"Les tests et l'agilité : la vraie vie","id":"24"},
        {"slot":"2","title":"Changer pour mieux coder","id":"26"},
        {"slot":"2","title":"Différences entre approches agiles","id":"28"},
        {"slot":"2","title":"Qualité: Stop à la procrastination","id":"29"},
        {"slot":"2","title":"La fleur de lotus ou comment redynamiser vos rétrospectives","id":"30"},
        {"slot":"2","title":"La fleur de rose ou comment redynamiser vos rétrospectives","id":"31"},
        {"slot":"2","title":"La fleur de yuka ou comment redynamiser vos rétrospectives","id":"32"},
        {"slot":"2","title":"La fleur de sel ou comment redynamiser vos rétrospectives","id":"33"}
    ],
    [
        {"slot":"2","title":"Scrum à Kanban : 3 retours d’expériences","id":"21"},
        {"slot":"2","title":"Les tests et l'agilité : la vraie vie","id":"24"},
        {"slot":"2","title":"Changer pour mieux coder","id":"26"},
        {"slot":"2","title":"Différences entre approches agiles","id":"28"},
        {"slot":"2","title":"Qualité: Stop à la procrastination","id":"29"},
        {"slot":"2","title":"La fleur de lotus ou comment redynamiser vos rétrospectives","id":"30"},
        {"slot":"2","title":"La fleur de rose ou comment redynamiser vos rétrospectives","id":"31"},
        {"slot":"2","title":"La fleur de yuka ou comment redynamiser vos rétrospectives","id":"32"},
        {"slot":"2","title":"La fleur de sel ou comment redynamiser vos rétrospectives","id":"33"}
    ],
    [
      {"slot":0, 'title':"Apéro offert par le CARA à tous les présents", "id":0}  
    ],
    [
      {"slot":0, 'title':"Fin de la Journée", "id":0}  
    ],
];
$.each(program, function(islot, slot) {
    var session_html = '';
    if (slot.length == 1) {
        session_html += '<td colspan="9" class="plenary">'+slot[0]['title']+'</td>';
    } else {
        $.each(slot, function (isession, session) {
            session_html += '<td>'+session['title']+'</td>';
        });
    }
    $('#program_content').append('<tr>'+session_html+'</tr>');
});