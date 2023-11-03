(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {
            this.id = id;
            this.type = type;
        }
    }

    class InputAttributes{
        constructor(
            public value: string,
            public placeholder: string            
        ){
            this.value = value;
            this.placeholder = placeholder;
        }
    }

    class InputEvents {
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    interface inputElementProps {
        id: string,
        //type: HtmlType,
        value: string,
        placeholder: string 
    }
    class InputElement{        
        public htmlElement:  HtmlElement;
        public inputAtributes:  InputAttributes;
        public inputEvents:  InputEvents;

        constructor({value, placeholder, id}:inputElementProps
        ){            
            this.htmlElement = new HtmlElement(id, 'input');
            this.inputAtributes = new InputAttributes(value, placeholder);
            this.inputEvents = new InputEvents();
        }
    }

    const inputElement = new InputElement({id:'txtName', value:'Fernando', placeholder:'Enter first name'});
    console.log({ inputElement }); 
    //? Idea para la nueva clase InputElement

    //const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');    
    //console.log({ nameField });

})()