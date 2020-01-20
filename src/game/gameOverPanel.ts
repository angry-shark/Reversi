class gameOverPanel extends eui.Button implements  eui.UIComponent {

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init()
	}
	private init(){
		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.back_home,this);
	}
	private back_home(){
		this.parent.addChild(StartGame.Shared());
		this.parent.removeChild(this);
		// this.parent.removeChild(new levelNormal());
	}
}