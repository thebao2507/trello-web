import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'

export default [
  {
    files: ['**/*.js', '**/*.jsx'], // Hỗ trợ cả .js và .jsx
    languageOptions: {
      sourceType: 'module',
      globals: globals.browser,
      ecmaVersion: 'latest',
      parserOptions: {
        ecmaFeatures: {
          jsx: true // Hỗ trợ JSX
        }
      }
    },
    plugins: {
      react: pluginReact
    },
    rules: {
      'react/jsx-uses-react': 'off', // Không cần import React từ React 17+
      'react/jsx-uses-vars': 'warn',
      // Cảnh báo khi có bất kỳ console.log hoặc các lệnh console khác
      'no-console': 1,
      // Cảnh báo khi có cấu trúc `if` không cần thiết hoặc cô đơn
      'no-lonely-if': 1,
      // Cảnh báo khi có biến được khai báo nhưng không được sử dụng
      'no-unused-vars': 1,
      // Cảnh báo khi có khoảng trắng không cần thiết ở cuối dòng
      'no-trailing-spaces': 1,
      // Cảnh báo khi có nhiều khoảng trắng giữa các ký tự
      'no-multi-spaces': 1,
      // Cảnh báo khi có nhiều dòng trống liên tiếp
      'no-multiple-empty-lines': 1,
      // Đặt quy tắc để có một khoảng trắng trước khối mã (block)
      'space-before-blocks': ['error', 'always'],
      // Cảnh báo khi không có khoảng trắng bên trong dấu ngoặc của đối tượng
      'object-curly-spacing': [1, 'always'],
      // Cảnh báo khi thụt lề không đúng (2 khoảng trắng)
      'indent': ['warn', 2],
      // Cảnh báo khi có dấu chấm phẩy thừa ở cuối câu lệnh (không sử dụng dấu chấm phẩy)
      'semi': [1, 'never'],
      // Đặt quy tắc để sử dụng dấu nháy đơn cho chuỗi (string) thay vì dấu nháy kép
      'quotes': ['error', 'single'],
      // Cảnh báo khi không có khoảng trắng bên trong dấu ngoặc của mảng
      'array-bracket-spacing': 1,
      // Tắt quy tắc kiểm tra kiểu dòng mới (linebreak) (có thể cần cấu hình nếu không phù hợp)
      'linebreak-style': 0,
      // Cảnh báo khi có cấu trúc mã không mong đợi hoặc có thể gây nhầm lẫn
      'no-unexpected-multiline': 'warn',
      // Cảnh báo khi không có khoảng trắng sau từ khóa như `if`, `for`, `while`, v.v.
      'keyword-spacing': 1,
      // Cảnh báo khi có dấu phẩy dư thừa ở cuối danh sách các phần tử trong mảng hoặc đối tượng
      'comma-dangle': 1,
      // Cảnh báo khi có khoảng trắng không đúng sau dấu phẩy
      'comma-spacing': 1,
      // Cảnh báo khi không có khoảng trắng xung quanh các dấu mũi tên trong hàm mũi tên (arrow functions)
      'arrow-spacing': 1
    },
    settings: {
      react: {
        version: 'detect' // Tự động phát hiện phiên bản React
      }
    }
  },
  pluginJs.configs.recommended
]
