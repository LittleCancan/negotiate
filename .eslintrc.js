module.exports = {
    root: true,
    env: {
      node: true
    },
    'extends': [
      'plugin:vue/essential',
      'eslint:recommended'
    ],
    parserOptions: {
      parser: '@babel/eslint-parser'
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
       //在rules中添加自定义规则
       //关闭组件命名规则
       "vue/multi-word-component-names":"off",
       "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    },
    overrides: [
        {  
            files: ['src/views/index.vue','src/views/**/index.vue'],   // 匹配views和二级目录中的index.vue
            rules: {
            'vue/multi-word-component-names':"off",
            } //给上面匹配的文件指定规则
        },
           
      {
        files: [
          '**/__tests__/*.{j,t}s?(x)',
          '**/tests/unit/**/*.spec.{j,t}s?(x)'
        ],
        env: {
          jest: true
        }
      }
    ]
  }
  
  