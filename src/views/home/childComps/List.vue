<template>
	<div>
		<div v-show="$store.state.gradeList && $store.state.gradeList !== 'error'" class="avg-grade">
			平均分: {{averGrade}}
		</div>
		
		<div v-if="checkState">
			<div class="wrap" v-for="(item, index) in (gradeList || $store.state.gradeList)">
				<div class="top">
					<div class="img-div"><img src="../../../assets/img/b.png" /></div>
					<div class="class-num">课程号:{{item.classNum}}</div>
					<div class="top-right">学年学期:{{item.time}}</div>
				</div>
				<div class="center">
					<div>课程名:{{item.className}}</div>
					<div class="center-div">
						<div>成绩:{{item.grade}}</div>
						<div class="study-status" :style="[isPass, {'color': calGrade(item.grade)}]">{{item.studyStatus}}</div>
					</div>
					<div class="credit">学分:{{item.credit}}</div>
				</div>
			</div>
		</div>
		
		<div class="error" v-else>
			<span>李的号似乎有点问题...</span>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'List',
		
		mounted() {
			this.$bus.$on('useFilter', (filterConfig) => {
				this.gradeList = this.filterGrade(filterConfig)
			})
		},
		
		destroyed() {
			this.$bus.$off('useFilter')
		},
		
		methods:{
			calGrade(grade){
				if(grade < 60){
					return 'rgb(255, 85, 0)'
				}else{
					return 'rgb(130,188,163)'
				}
			},
			
		    isNumber(obj) { 
			    return typeof obj === 'number' && !isNaN(obj) 
			},
			
			filterGrade(gradeConfig){
				let result = this.$store.state.gradeList.filter((gradeItem) => {
					return ((gradeItem.className.indexOf(gradeConfig.toLowerCase()) !== -1) || (gradeItem.className.indexOf(gradeConfig.toUpperCase()) !== -1))
				})
				return result
			}
		},
		computed:{
			checkState(){
				if(this.$store.state.gradeList === 'error'){
					this.$bus.$off('useFilter')
					return false
				}
				return true
			},
			
			averGrade(){
				if(this.$store.state.gradeList !== null && this.$store.state.gradeList !=='error'){
					let num = 0
					let total = this.$store.state.gradeList.reduce((pre, cur) => {
					if(this.isNumber(Number(cur.grade)) || cur.grade === '及格'){
						if(cur.grade === '')
							return pre
						if(cur.grade === '及格')
							cur.grade = 60
						num++
						return pre + Number(cur.grade)
					}
				}, 0)
					return total/num
				}
			}
			
		},
		
		data(){
			return{
				isPass:{
					color: 'rgb(130,188,163)',
				},
				gradeList: null
			}
		}
	}
</script>

<style scoped>
	.avg-grade{
		color: white;
	}
	.wrap{
		box-shadow: 0.25rem 0.25rem 0.25rem rgb(205, 205, 206);;
		margin-bottom: 2vh;
		margin-top: 1vh;
		background-color: white;
		opacity: 0.88;
		border-radius: 0.375rem;
	}
	.top{
		display: flex;
		justify-content: space-between;
		background-color: rgb(202,241,254);
		height: 5vh;
		line-height: 5vh;
		font-family: MYingHei W5,Roman-55,Microsoft Yahei,sans-serif;
		border-radius: 0.375rem 0.375rem 0 0;
	}
	.class-num{
		font-size: 0.88rem;
	}
	.img-div{
		position: relative;
		top: 1.1vh;
		left: 1vw;
	}
	img{
		width: 1.625rem;
		height: 1.875rem;
		transform:rotate(-45deg);
	}
	.top-left{
		padding-left: 3vw;
		font-size: 0.9rem;
	}
	.top-right{
		font-size: 0.78rem;
		padding-right: 3vw;
		color: rgb(181, 161, 159);
	}
	.center-div{
		display: flex;
		justify-content: space-between;
	}
	.study-status{
		margin-right: 6vw;
		font-size: 1.1rem;
	}
	.center{
		padding-top: 1vh;;
		padding-left: 5vw;
		position: relative;
		font-size: 0.88rem;
		border-left: 0.0625rem gainsboro solid;
	}
	.center .tail{
		display: flex;
		height: 5vh;
		line-height: 5vh;
	}
	.credit{
		padding-bottom: 1vh;
	}
	.error{
		color: white;
		font-size: 1rem;
		text-align: center;
	}
</style>
