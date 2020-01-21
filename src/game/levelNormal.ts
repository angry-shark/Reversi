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
		super();
		this.creatBlockGroup();
		this.startGame()
	}
	//根据总行数创建空白的整体界面
	// private _rectBoot:egret.Sprite;//方块总容器
	private _rectGrounp:Array<blockGroup>;//每一排方块
	private creatBlockGroup(){
		this._rectGrounp=[];
		// this._rectBoot=new egret.Sprite();
		//  this.addChild(this._rectBoot);
		var group:blockGroup;
		for(let i:number=0;i<Data._row();i++){
			group=new blockGroup();
			group.y=i*Data.get_width()/4;
			this.addChild(group);
			this._rectGrounp.push(group);	
			group.addEventListener("gameOver",this.gameOver,this);
			group.addEventListener("clickRight",this.clickRight,this);		
		}
		this.addChild(gameScore.Shared())
		this.y=Data.get_height()-this.height;
	}
	//绑定相应行数和黑色各种
	private startGame(){
		this.touchChildren = true;
		var nowRow:blockGroup;
		for(let i:number=0;i<Data._row();i++){
			nowRow=this._rectGrounp[i];
			nowRow.clear();
			nowRow.y=Data.get_width()/4*i;
			nowRow._curren=i;
			if(i!=(Data._row()-1)){
				this._rectGrounp[i].drawRow();
			}
		}
	}
	//初始化界面
	/*private init(){
		var group:blockGroup=new blockGroup();
		this.addChild(group);
		group.drawRow();
		group.addEventListener("gameOver",this.gameOver,this);
		group.addEventListener("clickRight",this.clickRight,this);
}*/
//点击失败
	private gameOver(){
		//禁止点击
		this.touchChildren=false;
		let endgame =new gameOverPanel();
		setTimeout(function() {
			endgame.x=Data.get_width()/2-endgame.width/2;
			endgame.y=Data.get_height()/2-endgame.height/2;
		}, 0);
			this.parent.addChild(endgame)
	}
	//点击成功
	private clickRight(){
		 let num=Data.Score;
		 num+=1;
		 Data.Score=num;
		for(var i:number=0;i<Data._row();i++){
			this._rectGrounp[i].move();
		}
	}
}