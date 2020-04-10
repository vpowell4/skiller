var skillstable = new Tabulator("#skillstable", {
    layout:"fitColumns",
    columns:[
        {title:"Skill", field:"skill", width:150, editor:"select",
            editorParams:{values:["A", "B","C","D","E","F","G"]}},
        {title:"Level", field:"level", width:100,formatter:"star",align:"center",editor:true},
        {title:"Target", field:"target", width:100,formatter:"star",align:"center",editor:true},
        {title:"Qualification", field:"qual", width:200,editor:"select",
            editorParams:{values:["Certificate", "Experience"]}},
        {title:"Comments", field:"comments", width:300, editor:true},
    ]});
var histtable = new Tabulator("#histtable", {
    layout:"fitColumns",
    columns:[
        {title:"Date/Time", field:"date", width:80},
        {title:"Changes", field:"changes", width:600},
    ]});
//Add row on "Add Row" button click
$("#addskills").click(function(){
    skillstable.addRow({});
    histtable.addRow(Object.assign({}, {date:(new Date()),
                                        changes:"New skill line xx added"}));
    });
$("#saveskills").click(function(){
    var JSONstr = JSON.parse(JSON.stringify(skillstable.getData()));
    console.log(JSONstr);
    queryString = Object.keys(JSONstr).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(JSONstr[k])
    }).join('&');
    console.log(queryString); 
    $.getJSON('/save_skills',queryString,
        function(data) {
            var response = data.result;
            console.log("response "+response);
            });
        histtable.addRow(Object.assign({}, {date:(new Date()),
                                        changes:"Skills Table saved"}));
    });
$("#downloadskills").click(function(){
    skillstable.download("html", "skills_"+Date()+".html", {style:true})
    histtable.addRow(Object.assign({}, {date:(new Date()),
                                        changes:"Skills Table saved"}));
    });