module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-case': [2, 'always', ['lower-case', 'upper-case']],
      'type-enum': [2, 'always',[
		  'feat',    //新增功能
		  'fix',     //修复bug
		  'docs',    //文档变更
		  'style',   //代码格式
		  'refactor',//代码重构
		  'perf',    //性能优化
		  'test',    //添加疏漏测试
		  'chore',   //对构建过程或辅助工具和库的更改
		  'revert'   //回滚 commit
	  ]]
    }
  }
