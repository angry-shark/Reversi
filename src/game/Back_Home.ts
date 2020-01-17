class Back_Home extends eui.Button implements  eui.UIComponent {
	//声明单例
	private static shared:Back_Home;
	public static Shared():Back_Home{
		if(Back_Home.shared==null){
			Back_Home.shared=new Back_Home();
		}
		return Back_Home.shared;
	}
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
		console.log(this.parent.parent.width);
		this.x=this.parent.parent.width-100;
		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.backhome,this);
	}
	private backhome(){
		this.parent.parent.addChild(StartGame.Shared());
		this.parent.parent.removeChild(this.parent)
	}
}