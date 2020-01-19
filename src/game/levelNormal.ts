class levelNormal extends egret.Sprite{
		//声明单例
	private static shared:levelNormal;
	public static Shared():levelNormal{
		if(levelNormal.shared==null){
			levelNormal.shared=new levelNormal();
		}
		return levelNormal.shared;
	}
	public constructor() {
		super()
		this.init()
	}
	//根据行数创建整体界面
	private _rectBoot:egret.Sprite;
	private _rectGrounp:Array<blockGroup>;
	private creatBlockGroup(){
		
	}
	//初始化界面
	private init(){
		var group:blockGroup=new blockGroup();
		this.addChild(group);
		group.drawRow();
		group.addEventListener("gameOver",this.gameOver,this);
		group.addEventListener("clickRight",this.clickRight,this);
	}
	private gameOver(){
		console.log('游戏结束')
	}
	private clickRight(){
		console.log(Data._row())
		console.log('点击正确下一条')
	}
}