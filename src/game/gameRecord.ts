class gameRecord extends eui.Component implements  eui.UIComponent {
	public record_group:eui.Group;
	public recore_Scroller:eui.Scroller;
	//声明单例
	private static shared:gameRecord;
	public static Shared():gameRecord{
		if(gameRecord.shared==null){
			gameRecord.shared=new gameRecord();
		}
		return gameRecord.shared;
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
	}
	//添加一个记录
	public creatRecord(){
		// var Record:record=new record();
		// this.record_group.addChild(new record())
	}
}