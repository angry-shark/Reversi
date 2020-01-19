class blockGroup extends egret.Sprite {
	//一排的数组
	private static row:Array<block>=[];
	//声明单例
/*	private static shared:blockGroup;
	public static Shared():blockGroup{
		if(blockGroup.shared==null){
			blockGroup.shared=new blockGroup();
		}
		return blockGroup.shared;
}*/
	public constructor() {
		super();
		this.row();
	}
	private row(){
		//初始化行
		blockGroup.row=[];
		//创建一排
		for(let i:number=0;i<Data.rowNumber;i++){
			var blocks:block=new block();
			blockGroup.row.push(blocks);
			blocks.x=i*blocks.width;
			this.addChild(blocks);
			blocks.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclicktap,this);
		}
	}
	//点击事件
	private _curren:number=0;
	private onclicktap(e:egret.TouchEvent){
		e.target.onBlockClick();
		if(e.target.blockColor==1||this._curren!=Data._row()-2){
			this.dispatchEventWith('gameOver')
		}else{
			this.dispatchEventWith('clickRight')
		}
	}
	//随机黑色
	public drawRow(){
		let radomNumber =Math.ceil(Math.random()*4)-1;
		this.clear();
		if(radomNumber==-1){
			radomNumber=0
		}
		blockGroup.row[radomNumber].blockColor=0;
	}
	//点击清空颜色
	public clear(){
		for(let i :number=0;i<blockGroup.row.length;i++){
			blockGroup.row[i].blockColor=1;
		}
	}
	public move(){
		this._curren++;
		if(this._curren==Data._row()){
			this._curren=0;
			this.drawRow();
		}
		this.y=this._curren*Data.get_width()
	}
}