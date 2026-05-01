/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://dotlist/./src/style.css?\n}");

/***/ },

/***/ "./src/List.js"
/*!*********************!*\
  !*** ./src/List.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ List)\n/* harmony export */ });\nclass List {\n  constructor(title, description, dueDate, priority, project) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.project = project;\n    this.completed = false;\n  }\n\n  //class methods\n  toggle() {\n    this.completed = !this.completed;\n  }\n}\n\n\n//# sourceURL=webpack://dotlist/./src/List.js?\n}");

/***/ },

/***/ "./src/addProject.js"
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateProjects: () => (/* binding */ CreateProjects),\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\nconst Project = {\n    default: [],\n    gym: [],\n    work: [],\n    random: []\n};\n\nfunction CreateProjects(name) {\n    let currentProject;\n    //if Project Exists -> traverse Projects and check if project exists -> if exists => alert(project already there)\n    if (Project[name]) {\n        console.log(\"Project already exists\");\n        return;\n    }\n\n    //if Project doesnt exist -> create Project\n    Project[name] = [];\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveProjects)();\n    currentProject = name;\n\n    return currentProject;\n}\n\n\n//# sourceURL=webpack://dotlist/./src/addProject.js?\n}");

/***/ },

/***/ "./src/addTodo.js"
/*!************************!*\
  !*** ./src/addTodo.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addTodo)\n/* harmony export */ });\n/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.js */ \"./src/List.js\");\n/* harmony import */ var _renderTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTodo.js */ \"./src/renderTodo.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\n\n// import CreateProjects, { Project } from \"./addProject.js\";\n\nfunction addTodo(Project) {\n  const Modal = document.querySelector(\"#myDialog\");\n  const AddTodoButton = document.querySelector(\"#AddTodo\");\n  const form = document.querySelector(\"#todoForm\");\n  const cancelButton = document.querySelector(\"#cancel\");\n\n  //open modal\n  AddTodoButton.addEventListener(\"click\", () => {\n    Modal.showModal();\n  });\n\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n\n    if (!form.checkValidity()) {\n      form.reportValidity();\n      return;\n    }\n\n    //reading values from form to create a toDo\n    const { Title, Description, DueDate, Priority, project } = e.target.elements;\n\n    const todo = new _List_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n      Title.value,\n      Description.value,\n      DueDate.value,\n      Priority.value,\n      project.value\n    );\n\n    // pushing todo into its Project array\n    Project[project.value].push(todo);\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjects)(); //to store data in localStorage\n    (0,_renderTodo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Project[project.value],project.value);\n\n    form.reset();\n    Modal.close();\n  });\n\n  cancelButton.addEventListener(\"click\", () => {\n    form.reset();\n    Modal.close();\n  });\n}\n\n\n//# sourceURL=webpack://dotlist/./src/addTodo.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTodo.js */ \"./src/addTodo.js\");\n/* harmony import */ var _renderProjects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderProjects.js */ \"./src/renderProjects.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addProject.js */ \"./src/addProject.js\");\n\n\n\n\n\n// const todos = [];\n\n//Adding Project Dialog Box DOM\nconst addProject = document.querySelector('#addProject');\nconst projectDialog = document.querySelector('#projectDialog');\n\nconst createProject =  document.querySelector('#createProject');\nconst closeDialog = document.querySelector('#cancelProject');\nconst projectName = document.querySelector('#projectName');\n\nconst closeProject = document.querySelector('.closeProject');\naddProject.addEventListener('click',()=>{\n\n  projectDialog.showModal();\n  projectName.focus();\n})\n\ncreateProject.addEventListener('click',()=>{\n    const input = projectName.value.trim();\n    if(!input){\n      alert('Please Enter a Project Name');\n      return;\n    }\n    (0,_addProject_js__WEBPACK_IMPORTED_MODULE_4__.CreateProjects)(input);\n    (0,_renderProjects_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    projectDialog.close();\n\n\n    projectName.value = \"\";\n})\n\ncloseDialog.addEventListener('click',()=>{\n    projectDialog.close();\n})\n\ncloseProject.addEventListener('click',()=>{\n  projectDialog.close();\n})\n\n//Create Todo dialog box DOM\nconst todoDialogClose = document.querySelector('.closeTodoDialog');\nconst todoDialog = document.querySelector('#myDialog');\ntodoDialogClose.addEventListener('click',()=>{\n  todoDialog.close();\n})\n  \n\n//View Todo List Dialog Box DOM\nconst viewDialog = document.querySelector('#viewDialog');\nconst closeBtns = document.querySelectorAll('.closeView');\n\ncloseBtns.forEach((btn) => {\n  btn.addEventListener('click', () => {\n    viewDialog.close();\n  });\n});\n\n//Delete Todo list Dialog Box DOM\nconst delTodo = document.querySelector('#deleteTodoConfirm')\nconst closeDelBtns = document.querySelectorAll('.closeDelTodo');\n\ncloseDelBtns.forEach((btn)=>{\n  btn.addEventListener('click',()=>{\n    delTodo.close();\n  })\n})\n\n;(0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.loadProjects)();\n(0,_renderProjects_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_addTodo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_addProject_js__WEBPACK_IMPORTED_MODULE_4__.Project);\n\nconsole.log(_addProject_js__WEBPACK_IMPORTED_MODULE_4__.Project)\n\n\n\n//# sourceURL=webpack://dotlist/./src/index.js?\n}");

/***/ },

/***/ "./src/renderProjects.js"
/*!*******************************!*\
  !*** ./src/renderProjects.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderProjects)\n/* harmony export */ });\n/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject.js */ \"./src/addProject.js\");\n/* harmony import */ var _renderTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTodo.js */ \"./src/renderTodo.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\n\n\nfunction renderProjects() {\n    const container = document.querySelector('#projects');\n    container.innerHTML = \"\";\n\n    const ProjectSelect = document.querySelector('#projectSelect');\n    ProjectSelect.innerHTML = \"\";\n\n    for (let projectName of Object.keys(_addProject_js__WEBPACK_IMPORTED_MODULE_0__.Project)) {\n        const Div = document.createElement('div');\n        Div.classList.add('projectButtons');\n\n        const folderDiv = document.createElement('div');\n        folderDiv.classList.add('folderDiv');\n        folderDiv.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-folder-icon lucide-folder\"><path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\"/></svg> ${projectName}`;\n\n        Div.appendChild(folderDiv);\n        // clicking on the project getting its todo contents\n        Div.addEventListener('click',()=>{\n            (0,_renderTodo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_addProject_js__WEBPACK_IMPORTED_MODULE_0__.Project[projectName],projectName);\n        })\n\n        const delButton = document.createElement('span');\n        delButton.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d=\"M262.2 48C248.9 48 236.9 56.3 232.2 68.8L216 112L120 112C106.7 112 96 122.7 96 136C96 149.3 106.7 160 120 160L520 160C533.3 160 544 149.3 544 136C544 122.7 533.3 112 520 112L424 112L407.8 68.8C403.1 56.3 391.2 48 377.8 48L262.2 48zM128 208L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 208L464 208L464 512C464 520.8 456.8 528 448 528L192 528C183.2 528 176 520.8 176 512L176 208L128 208zM288 280C288 266.7 277.3 256 264 256C250.7 256 240 266.7 240 280L240 456C240 469.3 250.7 480 264 480C277.3 480 288 469.3 288 456L288 280zM400 280C400 266.7 389.3 256 376 256C362.7 256 352 266.7 352 280L352 456C352 469.3 362.7 480 376 480C389.3 480 400 469.3 400 456L400 280z\"/></svg>`\n        delButton.classList.add('delButton');\n\n        //clicking it -> deleting the Project with its contents from the Project Folder\n        delButton.addEventListener('click',(e)=>{\n\n            e.stopPropagation();\n            // console.log(`${projectName} is deleted`);\n            \n            delete _addProject_js__WEBPACK_IMPORTED_MODULE_0__.Project[projectName];\n            (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjects)();\n\n            //re-rendering project names\n            renderProjects();\n\n            //re-rendering the main area\n            document.querySelector('#displayTodo').innerHTML='';\n        })\n\n\n        Div.appendChild(delButton);\n        container.appendChild(Div);\n\n        //Adding Select Options as well\n        const option = document.createElement('option');\n        option.innerText = projectName;\n        ProjectSelect.appendChild(option);\n    }\n\n}\n\n//# sourceURL=webpack://dotlist/./src/renderProjects.js?\n}");

/***/ },

/***/ "./src/renderTodo.js"
/*!***************************!*\
  !*** ./src/renderTodo.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderTodo)\n/* harmony export */ });\n/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject.js */ \"./src/addProject.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\n\nlet currentIndex = null;\nlet currentProject = null;\n\nconst deleteBtn = document.querySelector('.DeleteTodo');\nconst delTodoDialog = document.querySelector('#deleteTodoConfirm');\n\ndeleteBtn.addEventListener('click',()=>{\n  if(currentIndex!=null && currentProject!=null){\n    //remove todo from correct array\n    _addProject_js__WEBPACK_IMPORTED_MODULE_0__.Project[currentProject].splice(currentIndex,1);\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjects)();\n\n    renderTodo(_addProject_js__WEBPACK_IMPORTED_MODULE_0__.Project[currentProject],currentProject);\n\n    //reset\n    currentIndex = null;\n    currentProject=null;\n\n    delTodoDialog.close();\n\n  }\n})\n\nfunction renderTodo(array,projectName) {\n  const container = document.querySelector(\"#displayTodo\");\n  container.innerHTML = \"\";\n  const para = document.createElement('p');\n  para.textContent = `${projectName}`;\n  para.classList.add('projectName');\n  container.appendChild(para);\n\n  array.forEach((item,index)=>{\n\n    // console.log(item);\n    \n    const date = document.createElement(\"p\");\n    date.classList.add('todoDate');\n\n    const d = new Date(item.dueDate);\n    const formatted = d.toLocaleDateString(\"en-US\", {\n      weekday: \"long\",\n      month: \"long\",\n      day: \"2-digit\",\n    });\n\n    date.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d=\"M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z\"/></svg> ${formatted}`;\n    container.appendChild(date);\n\n\n    const div = document.createElement(\"div\");\n    div.classList.add(\"todoBox\");\n    \n    // checkbox\n    const checkBox = document.createElement('input');\n    checkBox.type = 'checkbox';\n    checkBox.classList.add('checkBox');\n    const todoContent = document.createElement('div');\n    const todoTitle = document.createElement('p');\n    const todoDesc = document.createElement('p');\n    const due = document.createElement('div');\n    const priority = document.createElement('div');\n    const view = document.createElement('div');\n\n    if (item.completed) {\n      checkBox.checked = true;\n\n      todoContent.classList.add('completed');\n      todoContent.classList.add('completedOpacity');\n      due.classList.add('completedOpacity');\n      view.classList.add('completedOpacity');\n      priority.classList.add('completedOpacity');\n    }\n\n\n    checkBox.addEventListener('change',()=>{\n      item.completed = checkBox.checked;\n      (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjects)();\n      \n      if(item.completed){\n\n        todoContent.classList.add('completed');\n        todoContent.classList.add('completedOpacity');\n        due.classList.add('completedOpacity');\n        view.classList.add('completedOpacity');\n        priority.classList.add('completedOpacity');\n      }\n      else{\n        todoContent.classList.remove('completed');\n        due.classList.remove('completedOpacity');\n        priority.classList.remove('completedOpacity');\n        todoContent.classList.remove('completedOpacity');\n        view.classList.remove('completedOpacity');\n      }\n    })\n    \n    div.appendChild(checkBox);\n\n    //todo title and description\n    \n    todoTitle.style.fontSize = '20px';\n    todoTitle.textContent = item.title;\n\n    todoContent.classList.add('TodoContent');\n    todoContent.appendChild(todoTitle);\n\n    \n    todoDesc.textContent = item.description;\n    todoContent.appendChild(todoDesc);\n\n    div.appendChild(todoContent);\n\n\n    \n\n    //due Date element\n    \n    due.textContent = `📅 Due: ${item.dueDate}`;\n    due.classList.add('dueDate');\n\n    div.appendChild(due);\n\n    // priority element\n    \n    priority.textContent = item.priority;\n    \n    if(item.priority == \"High\"){\n      priority.classList.add('High');\n    }\n    else if(item.priority == 'Medium'){\n      priority.classList.add('Medium');\n    }\n    else {\n      priority.classList.add('Low');\n    }\n\n    div.appendChild(priority);\n\n    // view todo\n    \n    view.textContent = '👁️';\n    view.classList.add('view');\n\n    view.addEventListener('click',()=>{\n      const dialog = document.querySelector('#viewDialog');\n\n      document.querySelector('#viewTitle').textContent = item.title;\n      document.querySelector('#viewDesc').textContent = item.description;\n      document.querySelector('#viewProject').textContent = item.project;\n      document.querySelector('#viewPriority').textContent = item.priority;\n      document.querySelector('#viewDueDate').textContent = item.dueDate;\n      const status = document.querySelector('#viewStatus');\n\n    \n      if(item.completed == false){\n        status.textContent = 'Pending';\n      }\n      else{\n        status.textContent = 'Completed';\n      }\n\n\n\n      dialog.showModal();\n\n    })\n\n    div.appendChild(view);\n    \n    //delete Todo\n    const deleteTodo = document.createElement('div');\n    deleteTodo.textContent = '✕';\n    deleteTodo.classList.add('deleteTodo');\n\n    deleteTodo.addEventListener('click',()=>{\n      const delTodoDialog = document.querySelector('#deleteTodoConfirm');\n\n      // storing which todo to delete\n      currentIndex = index;\n      currentProject = projectName;\n\n      delTodoDialog.showModal();\n    })\n\n    div.appendChild(deleteTodo);\n\n\n\n\n\n    container.appendChild(div);\n  })\n}\n\n\n//# sourceURL=webpack://dotlist/./src/renderTodo.js?\n}");

/***/ },

/***/ "./src/storage.js"
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadProjects: () => (/* binding */ loadProjects),\n/* harmony export */   saveProjects: () => (/* binding */ saveProjects)\n/* harmony export */ });\n/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject.js */ \"./src/addProject.js\");\n/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.js */ \"./src/List.js\");\n\n\n\nfunction saveProjects(){\n    localStorage.setItem(\"projects\",JSON.stringify(_addProject_js__WEBPACK_IMPORTED_MODULE_0__.Project));\n}\n\nfunction loadProjects(){\n    const data = JSON.parse(localStorage.getItem(\"projects\"));\n\n    if(data){\n        //clear existing data\n        for(let key in _addProject_js__WEBPACK_IMPORTED_MODULE_0__.Project){\n            delete _addProject_js__WEBPACK_IMPORTED_MODULE_0__.Project[key];\n        }\n\n        //The todos are now plain objects, NOT instances of List class. so toggle will not work anymore\n        for (let key in data) { //key iterates over the projects i.e \"default\" ,\"gym\" ,\"work\"\n            _addProject_js__WEBPACK_IMPORTED_MODULE_0__.Project[key] = data[key].map(todo => {\n                const t = new _List_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n                todo.title,\n                todo.description,\n                todo.dueDate,\n                todo.priority,\n                todo.project\n            );\n            t.completed = todo.completed;\n            return t;\n            });\n        }\n    }\n}\n\n//# sourceURL=webpack://dotlist/./src/storage.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;