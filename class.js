// class

class Widget {
    constructor(name, description, url){
        this.name = name;
        this.description = description;
        this.url = url;
    }

    _buildLink(url){
        return `${this.url}${this.name}`;
    }

    render(){
        let link = this._buildLink(this.url);
        console.log(link);
    }
}


let widget = new Widget('users','The users widget','http://api/');
widget.render();

//inheritance