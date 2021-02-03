(() => {
    const typrArr = [
        'Trade',
        'Consumer',
        'Interno'
    ];

    const socialArr = [
        'Facebook',
        'Instagram',
        'Twitter',
        'Youtube',
        'Linkedin',
        'Google',
        'Programatica'
    ];

    const positionArr = [
        'Chat',
        'Stories',
        'Search',
        'Banner',
        'Responsivo',
        'Preroll',
        'Chat',
        'Dinâmico',
    ];

    const editArr = [
        'Ao-vivo',
        'Politica',
        'Nacional',
        'Business',
        'Internacional',
        'Saude',
        'Tecnologia',
        'Esporte',
        'Entretenimento',
        'Estilo',
        'Eiagem-gastronomia',
        'Podcast'
    ];

    const campaignArr = [
        'Institucional-imparcialidade',
        'Premio-Cabore',
        'Cnn-Vacina'
    ];

    const objectiveArr = [
        'Alcance',
        'Engajamento',
        'Lift',
        'Trafego',
        'Conversao',
        'Lead',
        'Video-View',
    ];

    const segmentationArr = [
        'Demografico',
        'Interesse',
        'Lookalike',
        'Remarketing',
        'Personalizado'
    ];

    const typeCallArr = [
        'hiperlink',
        'imagem',
        'qr-code'
    ];

    const formatArr = [
        'Imagem',
        'Gif',
        'Video',
        'Texto'
    ];

    const formatPostArr = [
        'feed',
        'stories',
        'comunidade',
        'link'
    ]

    const callArr = [
        'chamada',
        'rechamada'
    ];

    const formatAdArr = [
        'chat',
        'stories',
        'search',
        'banner',
        'responsivo',
        'preroll',
        'chat',
        'dinâmico'
    ];

    const plataformArr = [
        'web',
        'mobile',
        'app'
    ]


    const selector = selector => document.querySelector(selector);
    const create = element => document.createElement(element);
   
    const app = selector('#app');

    const logo = create('img');
    logo.src = './assets/image/logo.svg';
    logo.classList.add('logo');

    const header = create('div');
    header.classList.add('header');
    
    header.appendChild(logo);

    const container = create('div');
    container.classList.add('container');

    const form = create('form');
    form.classList.add('form');
    container.appendChild(form);

    const tabs = create('div');
    tabs.classList.add('tabs');
    form.appendChild(tabs);
  
    tabs.innerHTML =    `   <input type="radio" id="newsletter" name="tabs" value="cnn-brasil">
                            <label for="Newsletter">Newsletter</label>
                            
                            <input type="radio" id="marketing" name="tabs" value="Marketing">
                            <label for="Marketing">Marketing</label>

                            <input type="radio" id="social" name="tabs" value="Social">
                            <label for="Social">Social</label>

                            <input type="radio" id="redacao" name="tabs" value="Redacao">
                            <label for="Redacao">Redação</label>

                            <input type="radio" id="performance" name="tabs" value="Performance">
                            <label for="Performance">Performance</label>

                            <input type="radio" id="push" name="tabs" value="Push">
                            <label for="Push">Push</label>

                            <input type="radio" id="cnn-brasil" name="tabs" value="cnn-brasil">
                            <label for="cnn-brasil">Exit Intent</label>

                            <input type="radio" id="qr-code" name="tabs" value="qr-code">
                            <label for="qr-code">QR-Code</label>`;

    tabs.onchange = e => { 
        switch(e.target.id){
            case "newsletter":
                clean();

                selector('.url').setAttribute('style', 'display: block');
                selector('.edit').setAttribute('style', 'display: block');
                selector('.campaign').setAttribute('style', 'display: block');
                selector('.segmentation').setAttribute('style', 'display: block');
                selector('.nameNew').setAttribute('style', 'display: block');
                selector('.typeCall').setAttribute('style', 'display: block');
                selector('.buttonSend').setAttribute('style', 'display: block');

                sessionStorage.setItem('target', 'newsletter');
            break;
            case "marketing":
                clean();

                selector('.url').setAttribute('style', 'display: block');
                selector('.type').setAttribute('style', 'display: block');
                selector('.social').setAttribute('style', 'display: block');
                selector('.position').setAttribute('style', 'display: block');
                selector('.edit').setAttribute('style', 'display: block');
                selector('.campaign').setAttribute('style', 'display: block');
                selector('.objective').setAttribute('style', 'display: block');
                selector('.segmentation').setAttribute('style', 'display: block');
                selector('.subSegmentation').setAttribute('style', 'display: block');
                selector('.format').setAttribute('style', 'display: block');
                selector('.line').setAttribute('style', 'display: block');
                selector('.buttonSend').setAttribute('style', 'display: block');

                sessionStorage.setItem('target', 'marketing');
            break;
            case "social":
                clean();
                
                selector('.url').setAttribute('style', 'display: block');
                selector('.social').setAttribute('style', 'display: block');
                selector('.format').setAttribute('style', 'display: block');
                selector('.edit').setAttribute('style', 'display: block');
                selector('.campaign').setAttribute('style', 'display: block');
                selector('.call').setAttribute('style', 'display: block');
                selector('.format').setAttribute('style', 'display: block');
                selector('.buttonSend').setAttribute('style', 'display: block');

                sessionStorage.setItem('target', 'social');
            break;
            case "redacao":
                clean();
                
                selector('.url').setAttribute('style', 'display: block');
                selector('.social').setAttribute('style', 'display: block');
                selector('.formatPost').setAttribute('style', 'display: block');
                selector('.edit').setAttribute('style', 'display: block');
                selector('.campaign').setAttribute('style', 'display: block');
                selector('.call').setAttribute('style', 'display: block');
                selector('.format').setAttribute('style', 'display: block');
                selector('.buttonSend').setAttribute('style', 'display: block');

                sessionStorage.setItem('target', 'redacao');
            break;
            case "performance":
                clean();

                selector('.url').setAttribute('style', 'display: block');
                selector('.type').setAttribute('style', 'display: block');
                selector('.social').setAttribute('style', 'display: block');
                selector('.formatAd').setAttribute('style', 'display: block');
                selector('.edit').setAttribute('style', 'display: block');
                selector('.campaign').setAttribute('style', 'display: block');
                selector('.objective').setAttribute('style', 'display: block');
                selector('.segmentation').setAttribute('style', 'display: block');
                selector('.subSegmentation').setAttribute('style', 'display: block');
                selector('.format').setAttribute('style', 'display: block');
                selector('.detail').setAttribute('style', 'display: block');
                
                selector('.buttonSend').setAttribute('style', 'display: block');

                sessionStorage.setItem('target', 'performance');
            break;
            case "push":
                clean();

                selector('.url').setAttribute('style', 'display: block');
                selector('.social').setAttribute('style', 'display: block');
                selector('.edit').setAttribute('style', 'display: block');
                selector('.campaign').setAttribute('style', 'display: block');
                selector('.segmentation').setAttribute('style', 'display: block');
                selector('.subSegmentation').setAttribute('style', 'display: block');
                selector('.plataform').setAttribute('style', 'display: block');
                
                selector('.buttonSend').setAttribute('style', 'display: block');

                sessionStorage.setItem('target', 'push');
            break;
            case "cnn-brasil":
                clean();

                selector('.url').setAttribute('style', 'display: block');
                selector('.social').setAttribute('style', 'display: block');
                selector('.edit').setAttribute('style', 'display: block');
                selector('.campaign').setAttribute('style', 'display: block');
                selector('.format').setAttribute('style', 'display: block');
                selector('.plataform').setAttribute('style', 'display: block');
                selector('.dimension').setAttribute('style', 'display: block');
                
                
                selector('.buttonSend').setAttribute('style', 'display: block');

                sessionStorage.setItem('target', 'cnn-brasil');
            break;
            case "qr-code":
                clean();

                selector('.url').setAttribute('style', 'display: block');
                selector('.social').setAttribute('style', 'display: block');
                selector('.edit').setAttribute('style', 'display: block');
                selector('.nameProgram').setAttribute('style', 'display: block');
                selector('.typeCall').setAttribute('style', 'display: block');
                
                selector('.buttonSend').setAttribute('style', 'display: block');

                sessionStorage.setItem('target', 'qr-code');
            break;

        } 
    }

    const clean = () => {
        selector('.url').setAttribute('style', 'display: none');
        selector('.edit').setAttribute('style', 'display: none');
        selector('.campaign').setAttribute('style', 'display: none');
        selector('.segmentation').setAttribute('style', 'display: none');
        selector('.nameNew').setAttribute('style', 'display: none');
        selector('.typeCall').setAttribute('style', 'display: none');
        selector('.buttonSend').setAttribute('style', 'display: none');
        selector('.type').setAttribute('style', 'display: none');
        selector('.social').setAttribute('style', 'display: none');
        selector('.position').setAttribute('style', 'display: none');
        selector('.objective').setAttribute('style', 'display: none');
        selector('.subSegmentation').setAttribute('style', 'display: none');
        selector('.format').setAttribute('style', 'display: none');
        selector('.formatPost').setAttribute('style', 'display: none');
        selector('.formatAd').setAttribute('style', 'display: none');
        selector('.line').setAttribute('style', 'display: none');
        selector('.call').setAttribute('style', 'display: none');
        selector('.plataform').setAttribute('style', 'display: none');
        selector('.dimension').setAttribute('style', 'display: none');
        selector('.nameProgram').setAttribute('style', 'display: none');
    }
    
    const url = create('div');
    url.classList.add('url');
    form.appendChild(url);
    url.innerHTML = `<input type="text" id="url" name="url" value="" placeholder="URL">`;

    const type = create('div');
    type.classList.add('type');
    type.classList.add('custom-select');
    form.appendChild(type);
    
    const typeOption = typrArr.map(e => {
        return  `<option value="${e}">${e}</option>`
    });

    type.innerHTML =  ` <select name="type" id="type">
                        <option value="">Tipo</option> 
                        ${typeOption} 
                        </select>`;

    const social = create('div');
    social.classList.add('social');
    social.classList.add('custom-select');
    form.appendChild(social);
    
    const socialOption = socialArr.map(e => {
        return  `<option value="${e}">${e}</option>`
                
    })

    social.innerHTML =  ` <select name="type" id="social">
                          <option value="">Mídia</option> 
                          ${socialOption} 
                          </select>`;

    const nameNew = create('div');
    nameNew.classList.add('nameNew');
    form.appendChild(nameNew);
    nameNew.innerHTML = `<input type="text" id="nameNew" name="nameNew" value="" placeholder="Nome da New">`;

    const position = create('div');
    position.classList.add('position');
    position.classList.add('custom-select');
    form.appendChild(position);
    
    const positionOption = positionArr.map(e => {
        return  `<option value="${e}">${e}</option>`
                
    })

    position.innerHTML =  ` <select name="type" id="position">
                            <option value="">Posicionamento</option> 
                            ${positionOption} 
                            </select>`;  
                        
    const edit = create('div');
    edit.classList.add('edit');
    edit.classList.add('custom-select');
    form.appendChild(edit);
    
    const editOption = editArr.map(e => {
        return  `<option value="${e}">${e}</option>`
                
    })

    edit.innerHTML =  ` <select name="type" id="edit">
                        <option value="">Editoria</option> 
                        ${editOption} 
                        </select>`;   

    const call = create('div');
    call.classList.add('call');
    call.classList.add('custom-select');
    form.appendChild(call);
    
    const callOption = callArr.map(e => {
        return  `<option value="${e}">${e}</option>`
                
    })

    call.innerHTML =  ` <select name="type" id="call">
                        <option value="">Chamada</option> 
                        ${callOption} 
                        </select>`;  
    
    const campaign = create('div');
    campaign.classList.add('campaign');
    campaign.classList.add('custom-select');
    form.appendChild(campaign);
    
    const campaignOption = campaignArr.map(e => {
        return  `<option value="${e}">${e}</option>`
                
    })

    campaign.innerHTML =  ` <select name="type" id="campaign">
                            <option value="">Campanha</option> 
                            ${campaignOption} 
                            </select>`;   

    const objective = create('div');
    objective.classList.add('objective');
    objective.classList.add('custom-select');
    form.appendChild(objective);
    
    const objectiveOption = objectiveArr.map(e => {
        return  `<option value="${e}">${e}</option>`
                
    })

    objective.innerHTML =  ` <select name="type" id="objective">
                             <option value="">Objetivo</option> 
                             ${objectiveOption} 
                             </select>`;  
                        
    const segmentation = create('div');
    segmentation.classList.add('segmentation');
    segmentation.classList.add('custom-select');
    form.appendChild(segmentation);
    
    const segmentationOption = segmentationArr.map(e => {
        return  `<option value="${e}">${e}</option>`
                
    })

    segmentation.innerHTML =  ` <select name="type" id="segmentation">
                                <option value="">Segmentação</option> 
                                ${segmentationOption} 
                                </select>`;  

    const typeCall = create('div');
    typeCall.classList.add('typeCall');
    typeCall.classList.add('custom-select');
    form.appendChild(typeCall);
    
    const typeCallOption = typeCallArr.map(e => {
        return  `<option value="${e}">${e}</option>`
                
    })

    typeCall.innerHTML =  ` <select name="type" id="typeCall">
                                <option value="">Tipo de Chamada</option> 
                                ${typeCallOption} 
                                </select>`;  
                                

    const subSegmentation = create('div');
    subSegmentation.classList.add('subSegmentation');
    form.appendChild(subSegmentation);
    subSegmentation.innerHTML = `<input type="text" id="subSegmentation" name="subSegmentation" value="" placeholder="Subsegmentação (usar - no lugar do espaço)">`;

    const format = create('div');
    format.classList.add('format');
    format.classList.add('custom-select');
    form.appendChild(format);
    
    const formatOption = formatArr.map(e => {
        return  `<option value="${e}">${e}</option>`
                
    })

    format.innerHTML =  `   <select name="type" id="format">
                            <option value="">Formato da Peça</option> 
                            ${formatOption} 
                            </select>`; 

    const detail = create('div');
    detail.classList.add('detail');
    form.appendChild(detail);
    detail.innerHTML = `<input type="text" id="detail" name="detail" value="" placeholder="Detalhe da peça">`;

    const formatPost = create('div');
    formatPost.classList.add('formatPost');
    formatPost.classList.add('custom-select');
    form.appendChild(formatPost);
    
    const formatPostOption = formatPostArr.map(e => {
        return  `<option value="${e}">${e}</option>`
                
    })

    formatPost.innerHTML =  `   <select name="type" id="formatPost">
                                <option value="">Formato do Post</option> 
                                ${formatPostOption} 
                                </select>`; 

    const formatAd = create('div');
    formatAd.classList.add('formatAd');
    formatAd.classList.add('custom-select');
    form.appendChild(formatAd);
    
    const formatAdOption = formatAdArr.map(e => {
        return  `<option value="${e}">${e}</option>`
                
    })

    formatAd.innerHTML =  `   <select name="type" id="formatAd">
                            <option value="">Formato do Ad</option> 
                            ${formatAdOption} 
                            </select>`; 

    const plataform = create('div');
    plataform.classList.add('plataform');
    plataform.classList.add('custom-select');
    form.appendChild(plataform);
    
    const plataformOption = plataformArr.map(e => {
        return  `<option value="${e}">${e}</option>`
                
    })

    plataform.innerHTML =  `    <select name="type" id="plataform">
                                <option value="">Plataforma</option> 
                                ${plataformOption} 
                                </select>`; 

    const line = create('div');
    line.classList.add('line');
    form.appendChild(line);
    line.innerHTML = `<input type="text" id="line" name="line" value="" placeholder="LINHA CRIATIVA (usar - no lugar do espaço)">`;

    const dimension = create('div');
    dimension.classList.add('dimension');
    form.appendChild(dimension);
    dimension.innerHTML = `<input type="text" id="dimension" name="dimension" value="" placeholder="Dimensões">`;

    const nameProgram = create('div');
    nameProgram.classList.add('nameProgram');
    form.appendChild(nameProgram);
    nameProgram.innerHTML = `<input type="text" id="nameProgram" name="nameProgram" value="" placeholder="Nome do Programa">`;

    
    const buttonSend = create('button');
    buttonSend.classList.add('buttonSend');
    form.appendChild(buttonSend);
    buttonSend.innerHTML = "<input type='submit' class='send' value='GERAR' />"

    const response = create('div');
    response.classList.add('response');
    form.appendChild(response);
    response.innerHTML = `  <input type="text" id="response" name="response" disable="disable" value="">`;
                            // <input type="button" class="copy">copy</button>`;
    response.setAttribute('disabled','disabled');

    const copy = () => {
        var copyText = selector('.response');
        copyText.select();
        document.execCommand("copy");
    }
    
    // const textCopy = selector(".copy");
     
    // textCopy.addEventListener("click", e =>  {
    //     copy();
    // });

    form.onsubmit = e => {
        e.preventDefault();

        var newsletter = document.getElementById("newsletter").value;
        var marketing = document.getElementById("marketing").value;
        var url = document.getElementById("url").value;   
        var social = document.getElementById("social").value; 
        var position = document.getElementById("position").value;   
        var objective = document.getElementById("objective").value;
        var type = document.getElementById("type").value;
        var edit = document.getElementById("edit").value;  
        var campaign = document.getElementById("campaign").value; 
        var segmentation = document.getElementById("segmentation").value; 
        var subSegmentation = document.getElementById("subSegmentation").value; 
        var nameNew = document.getElementById("nameNew").value;
        var typeCall = document.getElementById("typeCall").value;
        var format = document.getElementById("format").value;
        var formatPost = document.getElementById("formatPost").value;
        var line = document.getElementById("line").value;
        var call = document.getElementById("call").value;
        var formatAd = document.getElementById("formatAd").value;
        var detail = document.getElementById("detail").value;
        var plataform = document.getElementById("plataform").value;
        var dimension = document.getElementById("dimension").value;
        var nameProgram = document.getElementById("nameProgram").value;

        switch(sessionStorage.getItem('target')) {
            case 'newsletter':
                document.getElementById("response").value = 
                    `${url}?utm_source=${newsletter}&utm_medium=${newsletter}-${nameNew}&utm_campaign=${edit}-${campaign}-${segmentation}&utm_term=""&utm_content=${typeCall}`; 
            break;
            case 'marketing':
                document.getElementById("response").value = 
                    `${url}?utm_source=${marketing}-${type}&utm_medium=${social}-${position}&utm_campaign=${edit}-${campaign}&utm_term=${objective}-${segmentation}-${subSegmentation}&utm_content=${format}-${line}`;
            break;
            case 'social':
                document.getElementById("response").value = 
                    `${url}?utm_source=social&utm_medium=${social}-${format}&utm_campaign=${edit}-${campaign}&utm_term=${call}&utm_content=${format}`;
            break;
            case 'redacao':
                document.getElementById("response").value = 
                    `${url}?utm_source=social&utm_medium=${social}-${formatPost}&utm_campaign=${edit}-${campaign}&utm_term=${call}&utm_content=${format}`;
            break;
            case 'performance':
                document.getElementById("response").value = 
                    `${url}?utm_source=ads&utm_medium=${social}-${formatAd}&utm_campaign=${edit}-${campaign}&utm_term=${objective}-${segmentation}-${subSegmentation}&utm_content=${format}-${detail}`;
            break;
            case 'push':
                document.getElementById("response").value = 
                    `${url}?utm_source=cnn-brasil&utm_medium=${social}&utm_campaign=${edit}-${campaign}&utm_term=${segmentation}-${subSegmentation}&utm_content=${plataform}`;
            break;
            case 'cnn-brasil':
                document.getElementById("response").value = 
                    `${url}?utm_source=cnn-brasil&utm_medium=${social}&utm_campaign=${edit}-${campaign}&utm_term=""&utm_content=${format}-${dimension}`;
            break;
            case 'qr-code':
                document.getElementById("response").value = 
                    `${url}?utm_source=cnn-brasil&utm_medium=${social}&utm_campaign=${edit}&utm_term=${nameProgram}&utm_content=${typeCall}`;
            break;

                //A2;"?utm_source=";B2;"-";C2;"&utm_medium=";D2;"-";E2;"&utm_campaign=";F2;"-";G2;"&utm_term=";H2;"-";I2;"-";J2;"&utm_content=";K2;"-";L2
        }
            
        
        
        
        selector('.response').setAttribute('style', 'display: block');
    };

    app.appendChild(header);
    
    app.appendChild(container);
})()

var x, i, j, l, ll, selElmnt, a, b, c;

x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);