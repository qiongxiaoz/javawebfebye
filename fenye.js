//分页，传入值 总条数  当前页
function pagenum(totals,page){
	$(".pagenum").nextAll().remove();
	var str = new Array();
	//计算总页数
	var pageNo =  Math.ceil(totals/10);
	str[0]="<li><a href='javascript:changelist(1);'>首页</a></li>";
	str[1]="<li><a href='javascript:changelist("+(page-1)+");'>上一页</a></li>";
	for(var i=1;i<=pageNo;i++){
		if(i==page){
			str[i+1]="<li class='active'>"+i+"</li>";
		}else{
			str[i+1]="<li><a href='javascript:changelist("+i+");'>"+i+"</a></li>";
		}
	}
	str[pageNo+2]="<li><a href='javascript:changelist("+(page+1)+");'>下一页</a></li>";
	if(page==pageNo){
		str[pageNo+3]="<li class='active'>尾页</li>";
	}else{
		str[pageNo+3]="<li><a href='javascript:changelist("+pageNo+");'>尾页</a></li>";
	}
	if(totals==0){
		str.splice(1, str.length-1);
	}
	if(pageNo>9){
		if(page<6){
			str.splice(11, pageNo-9);
		}else{
			if(page>=6&&pageNo-page>4){
				str.splice(page+6, pageNo-4-page);
				str.splice(2, page-5);
			}else{
				str.splice(2, pageNo-9);
			}
		}
	}
	if(1==page){
		str[0]="<li class='active'>首页</li>";
		str.splice(1, 1);
	}
	if(page==pageNo){
		str.splice(str.length-2, 1);
	}
	$(".pager").append(str.join(''));
}
