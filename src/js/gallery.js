class Gallery {
  constructor(id) {
    this.el = document.getElementById(id);
  }

  close () {
    console.log('close');
  }

  render () {
    return (
      '<header className="tim-figure-header">\
        <i className="icon-dibu"></i>\
        <i className="icon-guanbi1" onclick={$this.close}>X</i>\
      </header>'
    )
  }
}