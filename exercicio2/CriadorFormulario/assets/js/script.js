class Form {
    items = [];
    method = 'GET';
    constructor(container,method,action){
        this.container = document.querySelector(container);
        this.method = method;
        this.action = action;
    }

    addItem(item){
        this.items.push(item);
    }

    createrrender(){
      let formElement = document.createElement('form');
      formElement.setAttribute('method', this.method);
      formElement.setAttribute('action',this.action);
      this.container.appendChild(formElement);

        for (let i in this.items){
            this.items[i].createrrender(formElement);
        }

        this.container.appendChild(formElement);
    }


}

class Input {
   
    required = false;
    _type = "text";
   
    constructor(name,label){
    this.name = name;
    this.label = label;
   }

   get type(){
    return this._type;
   }

   set type(t){
        if(['text','password','email','submit'].includes(t)){
            this._type = t;
        } else {
            throw new Error (`Input "${t}" type doesn't exist`);
        }
   }

   createrrender(formElement){
    let el = document.createElement('input');
    el.type = this.type;
    el.name = this.name;
    el.placeholder = this.label;
    el.required = this.required;

    formElement.appendChild(el);
}
}

class Button extends Input {
    constructor(label){
        super('',label)
        this.type = 'submit';
    }

    createrrender(formElement){
        let el = document.createElement('input');
        el.type = this.type;
        el.value = this.label;    
        formElement.appendChild(el);

}
}

/// IMPLEMENTACAO

//Formulario
let form = new Form(".FormArea","POST","https://site.com.br");


// EMAIL
let email = new Input("email",'Digite seu e-mail');
email.type = 'email';
email.required = true;
form.addItem(email);

// Senha
let senha = new Input("password","Digite sua Senha");
senha.type = 'password';
form.addItem(senha)


// Botão
let button = new Button('Enviar');
form.addItem(button);

form.createrrender();
