    let x=""
    for (let i = 0; i < data['Wf'].length; i++) {
        console.log(data['Wf'][i]['c'][0]['v'])
        console.log(data['Wf'][i]['c'][1]['v'])
        console.log(data['Wf'][i]['c'][2]['v'])
        console.log(data['Wf'][i]['c'][3]['v'])
        console.log(data['Wf'][i]['c'][4]['v'])
        x+='<div class="dataline"><div>Name:'+data['Wf'][i]['c'][0]['v']+'</div><div>Mobile:'+data['Wf'][i]['c'][1]['v']+'</div><div>Age:'+data['Wf'][i]['c'][2]['v']+'</div><div>Email:'+data['Wf'][i]['c'][3]['v']+'</div><div>Course:'+data['Wf'][i]['c'][4]['v']+'</div></div>'
       
      }
      container.innerHTML=x
    console.log(data)
