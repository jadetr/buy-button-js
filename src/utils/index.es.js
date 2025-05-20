/*
@license
The MIT License (MIT)

Copyright (c) 2016 Shopify Inc.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits$1 = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn$1 = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



















var toConsumableArray$1 = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/*
The MIT License (MIT)
Copyright (c) 2016 Shopify Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.


*/
function join() {
  for (var _len = arguments.length, fields = Array(_len), _key = 0; _key < _len; _key++) {
    fields[_key] = arguments[_key];
  }

  return fields.join(' ');
}

function isObject(value) {
  return Boolean(value) && Object.prototype.toString.call(value.valueOf()) === '[object Object]';
}

function deepFreezeCopyExcept(predicate, structure) {
  if (predicate(structure)) {
    return structure;
  } else if (isObject(structure)) {
    return Object.freeze(Object.keys(structure).reduce(function (copy, key) {
      copy[key] = deepFreezeCopyExcept(predicate, structure[key]);

      return copy;
    }, {}));
  } else if (Array.isArray(structure)) {
    return Object.freeze(structure.map(function (item) {
      return deepFreezeCopyExcept(predicate, item);
    }));
  } else {
    return structure;
  }
}

function schemaForType(typeBundle, typeName) {
  var typeSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var type = typeBundle.types[typeName];

  if (type) {
    return type;
  } else if (typeSchema && typeSchema.kind === 'INTERFACE') {
    return typeSchema;
  }

  throw new Error('No type of ' + typeName + ' found in schema');
}

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var toConsumableArray = function toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
};

var VariableDefinition = function () {

  /**
   * This constructor should not be invoked directly.
   * Use the factory function {@link Client#variable} to create a VariableDefinition.
   *
   * @param {String} name The name of the variable.
   * @param {String} type The GraphQL type of the variable.
   * @param {*} [defaultValue] The default value of the variable.
   */
  function VariableDefinition(name, type, defaultValue) {
    classCallCheck(this, VariableDefinition);

    this.name = name;
    this.type = type;
    this.defaultValue = defaultValue;
    Object.freeze(this);
  }

  /**
   * Returns the GraphQL query string for the variable as an input value (e.g. `$variableName`).
   *
   * @return {String} The GraphQL query string for the variable as an input value.
   */

  createClass(VariableDefinition, [{
    key: 'toInputValueString',
    value: function toInputValueString() {
      return '$' + this.name;
    }

    /**
     * Returns the GraphQL query string for the variable (e.g. `$variableName:VariableType = defaultValue`).
     *
     * @return {String} The GraphQL query string for the variable.
     */

  }, {
    key: 'toString',
    value: function toString() {
      var defaultValueString = this.defaultValue ? ' = ' + formatInputValue(this.defaultValue) : '';

      return '$' + this.name + ':' + this.type + defaultValueString;
    }
  }]);
  return VariableDefinition;
}();

function isVariable(value) {
  return VariableDefinition.prototype.isPrototypeOf(value);
}

function variable(name, type, defaultValue) {
  return new VariableDefinition(name, type, defaultValue);
}

var Enum = function () {

  /**
   * This constructor should not be invoked directly.
   * Use the factory function {@link Client#enum} to create an Enum.
   *
   * @param {String} key The key of the enum.
   */
  function Enum(key) {
    classCallCheck(this, Enum);

    this.key = key;
  }

  /**
   * Returns the GraphQL query string for the enum (e.g. `enumKey`).
   *
   * @return {String} The GraphQL query string for the enum.
   */

  createClass(Enum, [{
    key: "toString",
    value: function toString() {
      return this.key;
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.key.valueOf();
    }
  }]);
  return Enum;
}();

var enumFunction = function enumFunction(key) {
  return new Enum(key);
};

var Scalar = function () {
  function Scalar(value) {
    classCallCheck(this, Scalar);

    this.value = value;
  }

  createClass(Scalar, [{
    key: "toString",
    value: function toString() {
      return this.value.toString();
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.value.valueOf();
    }
  }, {
    key: "unwrapped",
    get: function get$$1() {
      return this.value;
    }
  }]);
  return Scalar;
}();

function formatInputValue(value) {
  if (VariableDefinition.prototype.isPrototypeOf(value)) {
    return value.toInputValueString();
  } else if (Enum.prototype.isPrototypeOf(value)) {
    return String(value);
  } else if (Scalar.prototype.isPrototypeOf(value)) {
    return JSON.stringify(value.valueOf());
  } else if (Array.isArray(value)) {
    return '[' + join.apply(undefined, toConsumableArray(value.map(formatInputValue))) + ']';
  } else if (isObject(value)) {
    return formatObject(value, '{', '}');
  } else {
    return JSON.stringify(value);
  }
}

function formatObject(value) {
  var openChar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var closeChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var argPairs = Object.keys(value).map(function (key) {
    return key + ': ' + formatInputValue(value[key]);
  });

  return '' + openChar + join.apply(undefined, toConsumableArray(argPairs)) + closeChar;
}

function formatArgs(args) {
  if (!Object.keys(args).length) {
    return '';
  }

  return ' (' + formatObject(args) + ')';
}

function formatDirectives(directives) {
  if (!Object.keys(directives).length) {
    return '';
  }

  var directiveStrings = Object.keys(directives).map(function (key) {
    var directiveArgs = directives[key];
    var arg = directiveArgs && Object.keys(directiveArgs).length ? '(' + formatObject(directiveArgs) + ')' : '';

    return '@' + key + arg;
  });

  return ' ' + join.apply(undefined, toConsumableArray(directiveStrings));
}

// eslint-disable-next-line no-empty-function
var noop = function noop() {};

var Profiler = {
  trackTypeDependency: noop,
  trackFieldDependency: noop
};

var trackTypeDependency = Profiler.trackTypeDependency;
var trackFieldDependency = Profiler.trackFieldDependency;

function parseFieldCreationArgs(creationArgs) {
  var callback = noop;
  var options = {};
  var selectionSet = null;

  if (creationArgs.length === 2) {
    if (typeof creationArgs[1] === 'function') {
      var _creationArgs = slicedToArray(creationArgs, 2);

      options = _creationArgs[0];
      callback = _creationArgs[1];
    } else {
      var _creationArgs2 = slicedToArray(creationArgs, 2);

      options = _creationArgs2[0];
      selectionSet = _creationArgs2[1];
    }
  } else if (creationArgs.length === 1) {
    // SelectionSet is defined before this function is called since it's
    // called by SelectionSet
    // eslint-disable-next-line no-use-before-define
    if (SelectionSet.prototype.isPrototypeOf(creationArgs[0])) {
      selectionSet = creationArgs[0];
    } else if (typeof creationArgs[0] === 'function') {
      callback = creationArgs[0];
    } else {
      options = creationArgs[0];
    }
  }

  return { options: options, selectionSet: selectionSet, callback: callback };
}

var emptyArgs = Object.freeze({});
var emptyDirectives = Object.freeze({});

var Field = function () {

  /**
   * This constructor should not be invoked directly.
   * Fields are added to a selection by {@link SelectionSetBuilder#add}, {@link SelectionSetBuilder#addConnection}
   * and {@link SelectionSetBuilder#addInlineFragmentOn}.
   *
   * @param {String} name The name of the field.
   * @param {Object} [options] An options object containing:
   *   @param {Object} [options.args] Arguments for the field.
   *   @param {String} [options.alias] An alias for the field.
   *   @param {Object} [options.directives] Directives for the field.
   * @param {SelectionSet} selectionSet The selection set on the field.
   */
  function Field(name, options, selectionSet) {
    classCallCheck(this, Field);

    this.name = name;
    this.alias = options.alias || null;
    this.responseKey = this.alias || this.name;
    this.args = options.args ? deepFreezeCopyExcept(isVariable, options.args) : emptyArgs;
    this.directives = options.directives ? deepFreezeCopyExcept(isVariable, options.directives) : emptyDirectives;
    this.selectionSet = selectionSet;
    Object.freeze(this);
  }

  /**
   * Returns the GraphQL query string for the Field (e.g. `catAlias: cat(size: 'small') { name }` or `name`).
   *
   * @return {String} The GraphQL query string for the Field.
   */

  createClass(Field, [{
    key: 'toString',
    value: function toString() {
      var aliasPrefix = this.alias ? this.alias + ': ' : '';

      return '' + aliasPrefix + this.name + formatArgs(this.args) + formatDirectives(this.directives) + this.selectionSet;
    }
  }]);
  return Field;
}();

// This is an interface that defines a usage, and simplifies type checking
var Spread = function Spread() {
  classCallCheck(this, Spread);
};

var InlineFragment = function (_Spread) {
  inherits(InlineFragment, _Spread);

  /**
   * This constructor should not be invoked directly.
   * Use the factory function {@link SelectionSetBuilder#addInlineFragmentOn} to create an InlineFragment.
   *
   * @param {String} typeName The type of the fragment.
   * @param {SelectionSet} selectionSet The selection set on the fragment.
   */
  function InlineFragment(typeName, selectionSet) {
    classCallCheck(this, InlineFragment);

    var _this = possibleConstructorReturn(this, (InlineFragment.__proto__ || Object.getPrototypeOf(InlineFragment)).call(this));

    _this.typeName = typeName;
    _this.selectionSet = selectionSet;
    Object.freeze(_this);
    return _this;
  }

  /**
   * Returns the GraphQL query string for the InlineFragment (e.g. `... on Cat { name }`).
   *
   * @return {String} The GraphQL query string for the InlineFragment.
   */

  createClass(InlineFragment, [{
    key: 'toString',
    value: function toString() {
      return '... on ' + this.typeName + this.selectionSet;
    }
  }]);
  return InlineFragment;
}(Spread);

var FragmentSpread = function (_Spread2) {
  inherits(FragmentSpread, _Spread2);

  /**
   * This constructor should not be invoked directly.
   * Use the factory function {@link Document#defineFragment} to create a FragmentSpread.
   *
   * @param {FragmentDefinition} fragmentDefinition The corresponding fragment definition.
   */
  function FragmentSpread(fragmentDefinition) {
    classCallCheck(this, FragmentSpread);

    var _this2 = possibleConstructorReturn(this, (FragmentSpread.__proto__ || Object.getPrototypeOf(FragmentSpread)).call(this));

    _this2.name = fragmentDefinition.name;
    _this2.selectionSet = fragmentDefinition.selectionSet;
    Object.freeze(_this2);
    return _this2;
  }

  /**
   * Returns the GraphQL query string for the FragmentSpread (e.g. `...catName`).
   *
   * @return {String} The GraphQL query string for the FragmentSpread.
   */

  createClass(FragmentSpread, [{
    key: 'toString',
    value: function toString() {
      return '...' + this.name;
    }
  }, {
    key: 'toDefinition',
    value: function toDefinition() {
      // eslint-disable-next-line no-use-before-define
      return new FragmentDefinition(this.name, this.selectionSet.typeSchema.name, this.selectionSet);
    }
  }]);
  return FragmentSpread;
}(Spread);

var FragmentDefinition = function () {

  /**
   * This constructor should not be invoked directly.
   * Use the factory function {@link Document#defineFragment} to create a FragmentDefinition on a {@link Document}.
   *
   * @param {String} name The name of the fragment definition.
   * @param {String} typeName The type of the fragment.
   */
  function FragmentDefinition(name, typeName, selectionSet) {
    classCallCheck(this, FragmentDefinition);

    this.name = name;
    this.typeName = typeName;
    this.selectionSet = selectionSet;
    this.spread = new FragmentSpread(this);
    Object.freeze(this);
  }

  /**
   * Returns the GraphQL query string for the FragmentDefinition (e.g. `fragment catName on Cat { name }`).
   *
   * @return {String} The GraphQL query string for the FragmentDefinition.
   */

  createClass(FragmentDefinition, [{
    key: 'toString',
    value: function toString() {
      return 'fragment ' + this.name + ' on ' + this.typeName + ' ' + this.selectionSet;
    }
  }]);
  return FragmentDefinition;
}();

function selectionsHaveIdField(selections) {
  return selections.some(function (fieldOrFragment) {
    if (Field.prototype.isPrototypeOf(fieldOrFragment)) {
      return fieldOrFragment.name === 'id';
    } else if (Spread.prototype.isPrototypeOf(fieldOrFragment) && fieldOrFragment.selectionSet.typeSchema.implementsNode) {
      return selectionsHaveIdField(fieldOrFragment.selectionSet.selections);
    }

    return false;
  });
}

function selectionsHaveTypenameField(selections) {
  return selections.some(function (fieldOrFragment) {
    if (Field.prototype.isPrototypeOf(fieldOrFragment)) {
      return fieldOrFragment.name === '__typename';
    } else if (Spread.prototype.isPrototypeOf(fieldOrFragment) && fieldOrFragment.selectionSet.typeSchema.implementsNode) {
      return selectionsHaveTypenameField(fieldOrFragment.selectionSet.selections);
    }

    return false;
  });
}

function indexSelectionsByResponseKey(selections) {
  function assignOrPush(obj, key, value) {
    if (Array.isArray(obj[key])) {
      obj[key].push(value);
    } else {
      obj[key] = [value];
    }
  }
  var unfrozenObject = selections.reduce(function (acc, selection) {
    if (selection.responseKey) {
      assignOrPush(acc, selection.responseKey, selection);
    } else {
      var responseKeys = Object.keys(selection.selectionSet.selectionsByResponseKey);

      responseKeys.forEach(function (responseKey) {
        assignOrPush(acc, responseKey, selection);
      });
    }

    return acc;
  }, {});

  Object.keys(unfrozenObject).forEach(function (key) {
    Object.freeze(unfrozenObject[key]);
  });

  return Object.freeze(unfrozenObject);
}

/**
 * Class that specifies the full selection of data to query.
 */

var SelectionSet = function () {

  /**
   * This constructor should not be invoked directly. SelectionSets are created when building queries/mutations.
   *
   * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
   * @param {(Object|String)} type The type of the current selection.
   * @param {Function} builderFunction Callback function used to build the SelectionSet.
   *   The callback takes a {@link SelectionSetBuilder} as its argument.
   */
  function SelectionSet(typeBundle, type, builderFunction) {
    classCallCheck(this, SelectionSet);

    if (typeof type === 'string') {
      this.typeSchema = schemaForType(typeBundle, type);
    } else {
      this.typeSchema = type;
    }

    trackTypeDependency(this.typeSchema.name);

    this.typeBundle = typeBundle;
    this.selections = [];
    if (builderFunction) {
      // eslint-disable-next-line no-use-before-define
      builderFunction(new SelectionSetBuilder(this.typeBundle, this.typeSchema, this.selections));
    }

    if (this.typeSchema.implementsNode || this.typeSchema.name === 'Node') {
      if (!selectionsHaveIdField(this.selections)) {
        this.selections.unshift(new Field('id', {}, new SelectionSet(typeBundle, 'ID')));
      }
    }

    if (this.typeSchema.kind === 'INTERFACE') {
      if (!selectionsHaveTypenameField(this.selections)) {
        this.selections.unshift(new Field('__typename', {}, new SelectionSet(typeBundle, 'String')));
      }
    }

    this.selectionsByResponseKey = indexSelectionsByResponseKey(this.selections);
    Object.freeze(this.selections);
    Object.freeze(this);
  }

  /**
   * Returns the GraphQL query string for the SelectionSet (e.g. `{ cat { name } }`).
   *
   * @return {String} The GraphQL query string for the SelectionSet.
   */

  createClass(SelectionSet, [{
    key: 'toString',
    value: function toString() {
      if (this.typeSchema.kind === 'SCALAR' || this.typeSchema.kind === 'ENUM') {
        return '';
      } else {
        return ' { ' + join(this.selections) + ' }';
      }
    }
  }]);
  return SelectionSet;
}();

var SelectionSetBuilder = function () {

  /**
   * This constructor should not be invoked directly. SelectionSetBuilders are created when building queries/mutations.
   *
   * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
   * @param {Object} typeSchema The schema object for the type of the current selection.
   * @param {Field[]} selections The fields on the current selection.
   */
  function SelectionSetBuilder(typeBundle, typeSchema, selections) {
    classCallCheck(this, SelectionSetBuilder);

    this.typeBundle = typeBundle;
    this.typeSchema = typeSchema;
    this.selections = selections;
  }

  createClass(SelectionSetBuilder, [{
    key: 'hasSelectionWithResponseKey',
    value: function hasSelectionWithResponseKey(responseKey) {
      return this.selections.some(function (field) {
        return field.responseKey === responseKey;
      });
    }

    /**
     * Adds a field to be queried on the current selection.
     *
     * @example
     * client.query((root) => {
     *   root.add('cat', {args: {id: '123456'}, alias: 'meow'}, (cat) => {
     *     cat.add('name');
     *   });
     * });
     *
     * @param {SelectionSet|String} selectionOrFieldName The selection or name of the field to add.
     * @param {Object} [options] Options on the query including:
     *   @param {Object} [options.args] Arguments on the query (e.g. `{id: '123456'}`).
     *   @param {String} [options.alias] Alias for the field being added.
     * @param {Function|SelectionSet} [callbackOrSelectionSet] Either a callback which will be used to create a new {@link SelectionSet}, or an existing {@link SelectionSet}.
     */

  }, {
    key: 'add',
    value: function add(selectionOrFieldName) {
      var selection = void 0;

      if (Object.prototype.toString.call(selectionOrFieldName) === '[object String]') {
        trackFieldDependency(this.typeSchema.name, selectionOrFieldName);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          rest[_key - 1] = arguments[_key];
        }

        selection = this.field.apply(this, [selectionOrFieldName].concat(rest));
      } else {
        if (Field.prototype.isPrototypeOf(selectionOrFieldName)) {
          trackFieldDependency(this.typeSchema.name, selectionOrFieldName.name);
        }

        selection = selectionOrFieldName;
      }

      if (selection.responseKey && this.hasSelectionWithResponseKey(selection.responseKey)) {
        throw new Error('The field name or alias \'' + selection.responseKey + '\' has already been added.');
      }
      this.selections.push(selection);
    }
  }, {
    key: 'field',
    value: function field(name) {
      for (var _len2 = arguments.length, creationArgs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        creationArgs[_key2 - 1] = arguments[_key2];
      }

      var parsedArgs = parseFieldCreationArgs(creationArgs);
      var options = parsedArgs.options,
          callback = parsedArgs.callback;
      var selectionSet = parsedArgs.selectionSet;

      if (!selectionSet) {
        if (!this.typeSchema.fieldBaseTypes[name]) {
          throw new Error('No field of name "' + name + '" found on type "' + this.typeSchema.name + '" in schema');
        }

        var fieldBaseType = schemaForType(this.typeBundle, this.typeSchema.fieldBaseTypes[name]);

        selectionSet = new SelectionSet(this.typeBundle, fieldBaseType, callback);
      }

      return new Field(name, options, selectionSet);
    }

    /**
     * Creates an inline fragment.
     *
     * @access private
     * @param {String} typeName The type  the inline fragment.
     * @param {Function|SelectionSet}  [callbackOrSelectionSet] Either a callback which will be used to create a new {@link SelectionSet}, or an existing {@link SelectionSet}.
     * @return {InlineFragment} An inline fragment.
     */

  }, {
    key: 'inlineFragmentOn',
    value: function inlineFragmentOn(typeName) {
      var builderFunctionOrSelectionSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      var selectionSet = void 0;

      if (SelectionSet.prototype.isPrototypeOf(builderFunctionOrSelectionSet)) {
        selectionSet = builderFunctionOrSelectionSet;
      } else {
        selectionSet = new SelectionSet(this.typeBundle, schemaForType(this.typeBundle, typeName), builderFunctionOrSelectionSet);
      }

      return new InlineFragment(typeName, selectionSet);
    }

    /**
     * Adds a field to be queried on the current selection.
     *
     * @access private
     * @param {String}    name The name of the field to add to the query.
     * @param {Object} [options] Options on the query including:
     *   @param {Object} [options.args] Arguments on the query (e.g. `{id: '123456'}`).
     *   @param {String} [options.alias] Alias for the field being added.
     * @param {Function}  [callback] Callback which will be used to create a new {@link SelectionSet} for the field added.
     */

  }, {
    key: 'addField',
    value: function addField(name) {
      for (var _len3 = arguments.length, creationArgs = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        creationArgs[_key3 - 1] = arguments[_key3];
      }

      this.add.apply(this, [name].concat(creationArgs));
    }

    /**
     * Adds a connection to be queried on the current selection.
     * This adds all the fields necessary for pagination.
     *
     * @example
     * client.query((root) => {
     *   root.add('cat', (cat) => {
     *     cat.addConnection('friends', {args: {first: 10}, alias: 'coolCats'}, (friends) => {
     *       friends.add('name');
     *     });
     *   });
     * });
     *
     * @param {String}    name The name of the connection to add to the query.
     * @param {Object} [options] Options on the query including:
     *   @param {Object} [options.args] Arguments on the query (e.g. `{first: 10}`).
     *   @param {String} [options.alias] Alias for the field being added.
     * @param {Function|SelectionSet}  [callbackOrSelectionSet] Either a callback which will be used to create a new {@link SelectionSet}, or an existing {@link SelectionSet}.
     */

  }, {
    key: 'addConnection',
    value: function addConnection(name) {
      for (var _len4 = arguments.length, creationArgs = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        creationArgs[_key4 - 1] = arguments[_key4];
      }

      var _parseFieldCreationAr = parseFieldCreationArgs(creationArgs),
          options = _parseFieldCreationAr.options,
          callback = _parseFieldCreationAr.callback,
          selectionSet = _parseFieldCreationAr.selectionSet;

      this.add(name, options, function (connection) {
        connection.add('pageInfo', {}, function (pageInfo) {
          pageInfo.add('hasNextPage');
          pageInfo.add('hasPreviousPage');
        });
        connection.add('edges', {}, function (edges) {
          edges.add('cursor');
          edges.addField('node', {}, selectionSet || callback); // This is bad. Don't do this
        });
      });
    }

    /**
     * Adds an inline fragment on the current selection.
     *
     * @example
     * client.query((root) => {
     *   root.add('animal', (animal) => {
     *     animal.addInlineFragmentOn('cat', (cat) => {
     *       cat.add('name');
     *     });
     *   });
     * });
     *
     * @param {String} typeName The name of the type of the inline fragment.
     * @param {Function|SelectionSet}  [callbackOrSelectionSet] Either a callback which will be used to create a new {@link SelectionSet}, or an existing {@link SelectionSet}.
     */

  }, {
    key: 'addInlineFragmentOn',
    value: function addInlineFragmentOn(typeName) {
      var fieldTypeCb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      this.add(this.inlineFragmentOn(typeName, fieldTypeCb));
    }

    /**
     * Adds a fragment spread on the current selection.
     *
     * @example
     * client.query((root) => {
     *   root.addFragment(catFragmentSpread);
     * });
     *
     * @param {FragmentSpread} fragmentSpread The fragment spread to add.
     */

  }, {
    key: 'addFragment',
    value: function addFragment(fragmentSpread) {
      this.add(fragmentSpread);
    }
  }]);
  return SelectionSetBuilder;
}();

function parseArgs(args) {
  var name = void 0;
  var variables = void 0;
  var selectionSetCallback = void 0;
  var internationalizationDirective = void 0;

  // Handle the case when internationalizationDirective is the last parameter
  if (args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].includes('inContext')) {
    internationalizationDirective = args[args.length - 1];
    // Remove the internationalizationDirective from args for further processing
    args = args.slice(0, args.length - 1);
  }

  // Now process remaining args using original logic
  if (args.length === 3) {
    var _args = args;

    var _args2 = slicedToArray(_args, 3);

    name = _args2[0];
    variables = _args2[1];
    selectionSetCallback = _args2[2];
  } else if (args.length === 2) {
    if (Object.prototype.toString.call(args[0]) === '[object String]') {
      name = args[0];
      variables = null;
    } else if (Array.isArray(args[0])) {
      variables = args[0];
      name = null;
    }

    selectionSetCallback = args[1];
  } else {
    selectionSetCallback = args[0];
    name = null;
  }

  return { name: name, variables: variables, selectionSetCallback: selectionSetCallback, internationalizationDirective: internationalizationDirective };
}

var VariableDefinitions = function () {
  function VariableDefinitions(variableDefinitions) {
    classCallCheck(this, VariableDefinitions);

    this.variableDefinitions = variableDefinitions ? [].concat(toConsumableArray(variableDefinitions)) : [];
    Object.freeze(this.variableDefinitions);
    Object.freeze(this);
  }

  createClass(VariableDefinitions, [{
    key: 'toString',
    value: function toString() {
      if (this.variableDefinitions.length === 0) {
        return '';
      }

      return ' (' + join(this.variableDefinitions) + ') ';
    }
  }]);
  return VariableDefinitions;
}();

/**
 * Base class for {@link Query} and {@link Mutation}.
 * @abstract
 */

var Operation = function () {

  /**
   * This constructor should not be invoked. The subclasses {@link Query} and {@link Mutation} should be used instead.
   */
  function Operation(typeBundle, operationType) {
    classCallCheck(this, Operation);

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var _parseArgs = parseArgs(args),
        name = _parseArgs.name,
        variables = _parseArgs.variables,
        selectionSetCallback = _parseArgs.selectionSetCallback,
        internationalizationDirective = _parseArgs.internationalizationDirective;

    this.typeBundle = typeBundle;
    this.name = name;
    this.variableDefinitions = new VariableDefinitions(variables);
    this.internationalizationDirective = internationalizationDirective;
    this.operationType = operationType;
    if (operationType === 'query') {
      this.selectionSet = new SelectionSet(typeBundle, typeBundle.queryType, selectionSetCallback);
      this.typeSchema = schemaForType(typeBundle, typeBundle.queryType);
    } else {
      this.selectionSet = new SelectionSet(typeBundle, typeBundle.mutationType, selectionSetCallback);
      this.typeSchema = schemaForType(typeBundle, typeBundle.mutationType);
    }
    Object.freeze(this);
  }

  /**
   * Whether the operation is anonymous (i.e. has no name).
   */

  createClass(Operation, [{
    key: 'toString',

    /**
     * Returns the GraphQL query or mutation string (e.g. `query myQuery { cat { name } }`).
     *
     * @return {String} The GraphQL query or mutation string.
     */
    value: function toString() {
      var nameString = this.name ? ' ' + this.name : '';
      var internationalizationDirective = this.internationalizationDirective ? this.internationalizationDirective : '';

      return '' + this.operationType + nameString + this.variableDefinitions + internationalizationDirective + this.selectionSet;
    }
  }, {
    key: 'isAnonymous',
    get: function get$$1() {
      return !this.name;
    }
  }]);
  return Operation;
}();

/**
 * GraphQL Query class.
 * @extends Operation
 */

var Query = function (_Operation) {
  inherits(Query, _Operation);

  /**
   * This constructor should not be invoked directly.
   * Use the factory functions {@link Client#query} or {@link Document#addQuery} to create a Query.
   *
   * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
   * @param {String} [name] A name for the query.
   * @param {Object[]} [variables] A list of variables in the query. See {@link Client#variable}.
   * @param {Function} selectionSetCallback The query builder callback.
   *   A {@link SelectionSet} is created using this callback.
   */
  function Query(typeBundle) {
    var _ref;

    classCallCheck(this, Query);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return possibleConstructorReturn(this, (_ref = Query.__proto__ || Object.getPrototypeOf(Query)).call.apply(_ref, [this, typeBundle, 'query'].concat(args)));
  }

  return Query;
}(Operation);

/**
 * GraphQL Mutation class.
 * @extends Operation
 */

var Mutation = function (_Operation) {
  inherits(Mutation, _Operation);

  /**
   * This constructor should not be invoked directly.
   * Use the factory functions {@link Client#mutation} or {@link Document#addMutation} to create a Mutation.
   *
   * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
   * @param {String} [name] A name for the mutation.
   * @param {Object[]} [variables] A list of variables in the mutation. See {@link Client#variable}.
   * @param {Function} selectionSetCallback The mutation builder callback.
   *   A {@link SelectionSet} is created using this callback.
   */
  function Mutation(typeBundle) {
    var _ref;

    classCallCheck(this, Mutation);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return possibleConstructorReturn(this, (_ref = Mutation.__proto__ || Object.getPrototypeOf(Mutation)).call.apply(_ref, [this, typeBundle, 'mutation'].concat(args)));
  }

  return Mutation;
}(Operation);

function isAnonymous(operation) {
  return operation.isAnonymous;
}

function hasAnonymousOperations(operations) {
  return operations.some(isAnonymous);
}

function hasDuplicateOperationNames(operations) {
  var names = operations.map(function (operation) {
    return operation.name;
  });

  return names.reduce(function (hasDuplicates, name, index) {
    return hasDuplicates || names.indexOf(name) !== index;
  }, false);
}

function extractOperation(typeBundle, operationType) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (Operation.prototype.isPrototypeOf(args[0])) {
    return args[0];
  }

  if (operationType === 'query') {
    return new (Function.prototype.bind.apply(Query, [null].concat([typeBundle], args)))();
  } else {
    return new (Function.prototype.bind.apply(Mutation, [null].concat([typeBundle], args)))();
  }
}

function isInvalidOperationCombination(operations) {
  if (operations.length === 1) {
    return false;
  }

  return hasAnonymousOperations(operations) || hasDuplicateOperationNames(operations);
}

function fragmentNameIsNotUnique(existingDefinitions, name) {
  return existingDefinitions.some(function (definition) {
    return definition.name === name;
  });
}

var Document = function () {

  /**
   * This constructor should not be invoked directly.
   * Use the factory function {@link Client#document} to create a Document.
   * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
   */
  function Document(typeBundle) {
    classCallCheck(this, Document);

    this.typeBundle = typeBundle;
    this.definitions = [];
  }

  /**
   * Returns the GraphQL query string for the Document (e.g. `query queryOne { ... } query queryTwo { ... }`).
   *
   * @return {String} The GraphQL query string for the Document.
   */

  createClass(Document, [{
    key: 'toString',
    value: function toString() {
      return join(this.definitions);
    }

    /**
     * Adds an operation to the Document.
     *
     * @private
     * @param {String} operationType The type of the operation. Either 'query' or 'mutation'.
     * @param {(Operation|String)} [query|queryName] Either an instance of an operation
     *   object, or the name of an operation. Both are optional.
     * @param {Object[]} [variables] A list of variables in the operation. See {@link Client#variable}.
     * @param {Function} [callback] The query builder callback. If an operation
     *   instance is passed, this callback will be ignored.
     *   A {@link SelectionSet} is created using this callback.
      */

  }, {
    key: 'addOperation',
    value: function addOperation(operationType) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var operation = extractOperation.apply(undefined, [this.typeBundle, operationType].concat(args));

      if (isInvalidOperationCombination(this.operations.concat(operation))) {
        throw new Error('All operations must be uniquely named on a multi-operation document');
      }

      this.definitions.push(operation);
    }

    /**
     * Adds a query to the Document.
     *
     * @example
     * document.addQuery('myQuery', (root) => {
     *   root.add('cat', (cat) => {
     *    cat.add('name');
     *   });
     * });
     *
     * @param {(Query|String)} [query|queryName] Either an instance of a query
     *   object, or the name of a query. Both are optional.
     * @param {Object[]} [variables] A list of variables in the query. See {@link Client#variable}.
     * @param {Function} [callback] The query builder callback. If a query
     *   instance is passed, this callback will be ignored.
     *   A {@link SelectionSet} is created using this callback.
     */

  }, {
    key: 'addQuery',
    value: function addQuery() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this.addOperation.apply(this, ['query'].concat(args));
    }

    /**
     * Adds a mutation to the Document.
     *
     * @example
     * const input = client.variable('input', 'CatCreateInput!');
     *
     * document.addMutation('myMutation', [input], (root) => {
     *   root.add('catCreate', {args: {input}}, (catCreate) => {
     *     catCreate.add('cat', (cat) => {
     *       cat.add('name');
     *     });
     *   });
     * });
     *
     * @param {(Mutation|String)} [mutation|mutationName] Either an instance of a mutation
     *   object, or the name of a mutation. Both are optional.
     * @param {Object[]} [variables] A list of variables in the mutation. See {@link Client#variable}.
     * @param {Function} [callback] The mutation builder callback. If a mutation
     *   instance is passed, this callback will be ignored.
     *   A {@link SelectionSet} is created using this callback.
     */

  }, {
    key: 'addMutation',
    value: function addMutation() {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      this.addOperation.apply(this, ['mutation'].concat(args));
    }

    /**
     * Defines a fragment on the Document.
     *
     * @param {String} name The name of the fragment.
     * @param {String} onType The type the fragment is on.
     * @param {Function} [builderFunction] The query builder callback.
     *   A {@link SelectionSet} is created using this callback.
     * @return {FragmentSpread} A {@link FragmentSpread} to be used with {@link SelectionSetBuilder#addFragment}.
     */

  }, {
    key: 'defineFragment',
    value: function defineFragment(name, onType, builderFunction) {
      if (fragmentNameIsNotUnique(this.fragmentDefinitions, name)) {
        throw new Error('All fragments must be uniquely named on a multi-fragment document');
      }

      var selectionSet = new SelectionSet(this.typeBundle, onType, builderFunction);
      var fragment = new FragmentDefinition(name, onType, selectionSet);

      this.definitions.push(fragment);

      return fragment.spread;
    }

    /**
     * All operations ({@link Query} and {@link Mutation}) on the Document.
     */

  }, {
    key: 'operations',
    get: function get$$1() {
      return this.definitions.filter(function (definition) {
        return Operation.prototype.isPrototypeOf(definition);
      });
    }

    /**
     * All {@link FragmentDefinition}s on the Document.
     */

  }, {
    key: 'fragmentDefinitions',
    get: function get$$1() {
      return this.definitions.filter(function (definition) {
        return FragmentDefinition.prototype.isPrototypeOf(definition);
      });
    }
  }]);
  return Document;
}();

/**
 * The base class used when deserializing response data.
 * Provides rich features, like functions to generate queries to refetch a node or fetch the next page.
 *
 * @class
 */
var GraphModel =

/**
 * @param {Object} attrs Attributes on the GraphModel.
 */
function GraphModel(attrs) {
  var _this = this;

  classCallCheck(this, GraphModel);

  Object.defineProperty(this, 'attrs', { value: attrs, enumerable: false });

  Object.keys(this.attrs).filter(function (key) {
    return !(key in _this);
  }).forEach(function (key) {
    var descriptor = void 0;

    if (attrs[key] === null) {
      descriptor = {
        enumerable: true,
        get: function get$$1() {
          return null;
        }
      };
    } else {
      descriptor = {
        enumerable: true,
        get: function get$$1() {
          return this.attrs[key].valueOf();
        }
      };
    }
    Object.defineProperty(_this, key, descriptor);
  });
};

/**
 * A registry of classes used to deserialize the response data. Uses {@link GraphModel} by default.
 */

var ClassRegistry = function () {
  function ClassRegistry() {
    classCallCheck(this, ClassRegistry);

    this.classStore = {};
  }

  /**
   * Registers a class for a GraphQL type in the registry.
   *
   * @param {Class} constructor The constructor of the class.
   * @param {String} type The GraphQL type of the object to deserialize into the class.
   */

  createClass(ClassRegistry, [{
    key: 'registerClassForType',
    value: function registerClassForType(constructor, type) {
      this.classStore[type] = constructor;
    }

    /**
     * Unregisters a class for a GraphQL type in the registry.
     *
     * @param {String} type The GraphQL type to unregister.
     */

  }, {
    key: 'unregisterClassForType',
    value: function unregisterClassForType(type) {
      delete this.classStore[type];
    }

    /**
     * Returns the class for the given GraphQL type.
     *
     * @param {String} type The GraphQL type to look up.
     * @return {Class|GraphModel} The class for the given GraphQL type. Defaults to {@link GraphModel} if no class is registered for the GraphQL type.
     */

  }, {
    key: 'classForType',
    value: function classForType(type) {
      return this.classStore[type] || GraphModel;
    }
  }]);
  return ClassRegistry;
}();

function isValue(arg) {
  return Object.prototype.toString.call(arg) !== '[object Null]' && Object.prototype.toString.call(arg) !== '[object Undefined]';
}

function isNodeContext(context) {
  return context.selection.selectionSet.typeSchema.implementsNode;
}

function isConnection(context) {
  return context.selection.selectionSet.typeSchema.name.endsWith('Connection');
}

function nearestNode(context) {
  if (context == null) {
    return null;
  } else if (isNodeContext(context)) {
    return context;
  } else {
    return nearestNode(context.parent);
  }
}

function contextsFromRoot(context) {
  if (context.parent) {
    return contextsFromRoot(context.parent).concat(context);
  } else {
    return [context];
  }
}

function contextsFromNearestNode(context) {
  if (context.selection.selectionSet.typeSchema.implementsNode) {
    return [context];
  } else {
    return contextsFromNearestNode(context.parent).concat(context);
  }
}

function initializeDocumentAndVars(currentContext, contextChain) {
  var lastInChain = contextChain[contextChain.length - 1];
  var first = lastInChain.selection.args.first;
  var variableDefinitions = Object.keys(lastInChain.selection.args).filter(function (key) {
    return isVariable(lastInChain.selection.args[key]);
  }).map(function (key) {
    return lastInChain.selection.args[key];
  });

  var firstVar = variableDefinitions.find(function (definition) {
    return definition.name === 'first';
  });

  if (!firstVar) {
    if (isVariable(first)) {
      firstVar = first;
    } else {
      firstVar = variable('first', 'Int', first);
      variableDefinitions.push(firstVar);
    }
  }

  var document = new Document(currentContext.selection.selectionSet.typeBundle);

  return [document, variableDefinitions, firstVar];
}

function addNextFieldTo(currentSelection, contextChain, path, cursor) {
  // There are always at least two. When we start, it's the root context, and the first set
  var nextContext = contextChain.shift();

  path.push(nextContext.selection.responseKey);

  if (contextChain.length) {
    currentSelection.add(nextContext.selection.name, { alias: nextContext.selection.alias, args: nextContext.selection.args }, function (newSelection) {
      addNextFieldTo(newSelection, contextChain, path, cursor);
    });
  } else {
    var edgesField = nextContext.selection.selectionSet.selections.find(function (field) {
      return field.name === 'edges';
    });
    var nodeField = edgesField.selectionSet.selections.find(function (field) {
      return field.name === 'node';
    });
    var first = void 0;

    if (isVariable(nextContext.selection.args.first)) {
      first = nextContext.selection.args.first;
    } else {
      first = variable('first', 'Int', nextContext.selection.args.first);
    }

    var options = {
      alias: nextContext.selection.alias,
      args: Object.assign({}, nextContext.selection.args, { after: cursor, first: first })
    };

    currentSelection.addConnection(nextContext.selection.name, options, nodeField.selectionSet);
  }
}

function collectFragments(selections) {
  return selections.reduce(function (fragmentDefinitions, field) {
    if (FragmentSpread.prototype.isPrototypeOf(field)) {
      fragmentDefinitions.push(field.toDefinition());
    }

    fragmentDefinitions.push.apply(fragmentDefinitions, toConsumableArray(collectFragments(field.selectionSet.selections)));

    return fragmentDefinitions;
  }, []);
}

function nextPageQueryAndPath(context, cursor) {
  var nearestNodeContext = nearestNode(context);

  if (nearestNodeContext) {
    return function () {
      var _document$definitions;

      var path = [];
      var nodeType = nearestNodeContext.selection.selectionSet.typeSchema;
      var nodeId = nearestNodeContext.responseData.id;
      var contextChain = contextsFromNearestNode(context);

      var _initializeDocumentAn = initializeDocumentAndVars(context, contextChain),
          _initializeDocumentAn2 = slicedToArray(_initializeDocumentAn, 2),
          document = _initializeDocumentAn2[0],
          variableDefinitions = _initializeDocumentAn2[1];

      document.addQuery(variableDefinitions, function (root) {
        path.push('node');
        root.add('node', { args: { id: nodeId } }, function (node) {
          node.addInlineFragmentOn(nodeType.name, function (fragment) {
            addNextFieldTo(fragment, contextChain.slice(1), path, cursor);
          });
        });
      });

      var fragments = collectFragments(document.operations[0].selectionSet.selections);

      (_document$definitions = document.definitions).unshift.apply(_document$definitions, toConsumableArray(fragments));

      return [document, path];
    };
  } else {
    return function () {
      var _document$definitions2;

      var path = [];
      var contextChain = contextsFromRoot(context);

      var _initializeDocumentAn3 = initializeDocumentAndVars(context, contextChain),
          _initializeDocumentAn4 = slicedToArray(_initializeDocumentAn3, 2),
          document = _initializeDocumentAn4[0],
          variableDefinitions = _initializeDocumentAn4[1];

      document.addQuery(variableDefinitions, function (root) {
        addNextFieldTo(root, contextChain.slice(1), path, cursor);
      });

      var fragments = collectFragments(document.operations[0].selectionSet.selections);

      (_document$definitions2 = document.definitions).unshift.apply(_document$definitions2, toConsumableArray(fragments));

      return [document, path];
    };
  }
}

function hasNextPage$1(connection, edge) {
  if (edge !== connection.edges[connection.edges.length - 1]) {
    return new Scalar(true);
  }

  return connection.pageInfo.hasNextPage;
}

function hasPreviousPage(connection, edge) {
  if (edge !== connection.edges[0]) {
    return new Scalar(true);
  }

  return connection.pageInfo.hasPreviousPage;
}

function transformConnections(variableValues) {
  return function (context, value) {
    if (isConnection(context)) {
      if (!(value.pageInfo && value.pageInfo.hasOwnProperty('hasNextPage') && value.pageInfo.hasOwnProperty('hasPreviousPage'))) {
        throw new Error('Connections must include the selections "pageInfo { hasNextPage, hasPreviousPage }".');
      }

      return value.edges.map(function (edge) {
        return Object.assign(edge.node, {
          nextPageQueryAndPath: nextPageQueryAndPath(context, edge.cursor),
          hasNextPage: hasNextPage$1(value, edge),
          hasPreviousPage: hasPreviousPage(value, edge),
          variableValues: variableValues
        });
      });
    } else {
      return value;
    }
  };
}

/* eslint-disable no-warning-comments */
var DecodingContext = function () {
  function DecodingContext(selection, responseData) {
    var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    classCallCheck(this, DecodingContext);

    this.selection = selection;
    this.responseData = responseData;
    this.parent = parent;
    Object.freeze(this);
  }

  createClass(DecodingContext, [{
    key: 'contextForObjectProperty',
    value: function contextForObjectProperty(responseKey) {
      var nestedSelections = this.selection.selectionSet.selectionsByResponseKey[responseKey];
      var nextSelection = nestedSelections && nestedSelections[0];
      var nextContext = void 0;

      // fragment spreads operate inside the current context, so we recurse to get the proper
      // selection set, but retain the current response context
      if (Spread.prototype.isPrototypeOf(nextSelection)) {
        nextContext = new DecodingContext(nextSelection, this.responseData, this.parent);
      } else {
        nextContext = new DecodingContext(nextSelection, this.responseData[responseKey], this);
      }

      if (!nextSelection) {
        throw new Error('Unexpected response key "' + responseKey + '", not found in selection set: ' + this.selection.selectionSet);
      }

      if (Field.prototype.isPrototypeOf(nextSelection)) {
        return nextContext;
      } else {
        return nextContext.contextForObjectProperty(responseKey);
      }
    }
  }, {
    key: 'contextForArrayItem',
    value: function contextForArrayItem(item) {
      return new DecodingContext(this.selection, item, this.parent);
    }
  }]);
  return DecodingContext;
}();

function decodeArrayItems(context, transformers) {
  return context.responseData.map(function (item) {
    return decodeContext(context.contextForArrayItem(item), transformers);
  });
}

function decodeObjectValues(context, transformers) {
  return Object.keys(context.responseData).reduce(function (acc, responseKey) {
    acc[responseKey] = decodeContext(context.contextForObjectProperty(responseKey), transformers);

    return acc;
  }, {});
}

function runTransformers(transformers, context, value) {
  return transformers.reduce(function (acc, transformer) {
    return transformer(context, acc);
  }, value);
}

function decodeContext(context, transformers) {
  var value = context.responseData;

  if (Array.isArray(value)) {
    value = decodeArrayItems(context, transformers);
  } else if (isObject(value)) {
    value = decodeObjectValues(context, transformers);
  }

  return runTransformers(transformers, context, value);
}

function generateRefetchQueries(context, value) {
  if (isValue(value) && isNodeContext(context)) {
    value.refetchQuery = function () {
      return new Query(context.selection.selectionSet.typeBundle, function (root) {
        root.add('node', { args: { id: context.responseData.id } }, function (node) {
          node.addInlineFragmentOn(context.selection.selectionSet.typeSchema.name, context.selection.selectionSet);
        });
      });
    };
  }

  return value;
}

function transformPojosToClassesWithRegistry(classRegistry) {
  return function transformPojosToClasses(context, value) {
    if (isObject(value)) {
      var Klass = classRegistry.classForType(context.selection.selectionSet.typeSchema.name);

      return new Klass(value);
    } else {
      return value;
    }
  };
}

function transformScalars(context, value) {
  if (isValue(value)) {
    if (context.selection.selectionSet.typeSchema.kind === 'SCALAR') {
      return new Scalar(value);
    } else if (context.selection.selectionSet.typeSchema.kind === 'ENUM') {
      return new Enum(value);
    }
  }

  return value;
}

function recordTypeInformation(context, value) {
  var _context$selection$se = context.selection.selectionSet,
      typeBundle = _context$selection$se.typeBundle,
      typeSchema = _context$selection$se.typeSchema;

  if (isValue(value)) {
    if (value.__typename) {
      value.type = schemaForType(typeBundle, value.__typename, typeSchema);
    } else {
      value.type = typeSchema;
    }
  }

  return value;
}

function defaultTransformers(_ref) {
  var _ref$classRegistry = _ref.classRegistry,
      classRegistry = _ref$classRegistry === undefined ? new ClassRegistry() : _ref$classRegistry,
      variableValues = _ref.variableValues;

  return [transformScalars, generateRefetchQueries, transformConnections(variableValues), recordTypeInformation, transformPojosToClassesWithRegistry(classRegistry)];
}

/**
 * A function used to decode the response data.
 *
 * @function decode
 * @param {SelectionSet} selection The selection set used to query the response data.
 * @param {Object} responseData The response data returned.
 * @param {Object} [options] Options to use when decoding including:
 *   @param {ClassRegistry} [options.classRegistry] A class registry to use when deserializing the data into classes.
 * @return {GraphModel} The decoded response data.
 */
function decode(selection, responseData) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var transformers = options.transformers || defaultTransformers(options);
  var context = new DecodingContext(selection, responseData);

  return decodeContext(context, transformers);
}

function httpFetcher(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return function fetcher(graphQLParams, headers) {
    return fetch(url, _extends({
      body: JSON.stringify(graphQLParams),
      method: 'POST',
      mode: 'cors'
    }, options, {
      headers: _extends({
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }, options.headers, headers)
    })).then(function (response) {
      var contentType = response.headers.get('content-type');

      if (contentType.indexOf('application/json') > -1) {
        return response.json();
      }

      return response.text().then(function (text) {
        return { text: text };
      });
    });
  };
}

function hasNextPage(paginatedModels) {
  return paginatedModels && paginatedModels.length && paginatedModels[paginatedModels.length - 1].hasNextPage;
}

/**
 * The Client class used to create and send GraphQL documents, fragments, queries and mutations.
 */

var Client$2 = function () {

  /**
   * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
   * @param {Object} options An options object. Must include either `url` and optional `fetcherOptions` OR a `fetcher` function.
   *   @param {(String|Function)} options.url|fetcher Either the URL of the GraphQL API endpoint, or a custom fetcher function for further customization.
   *   @param {Object} [options.fetcherOptions] Additional options to use with `fetch`, like headers. Do not specify this argument if `fetcher` is specified.
   *   @param {ClassRegistry} [options.registry=new ClassRegistry()] A {@link ClassRegistry} used to decode the response data.
   */
  function Client(typeBundle, _ref) {
    var url = _ref.url,
        fetcherOptions = _ref.fetcherOptions,
        fetcher = _ref.fetcher,
        _ref$registry = _ref.registry,
        registry = _ref$registry === undefined ? new ClassRegistry() : _ref$registry;
    classCallCheck(this, Client);

    this.typeBundle = typeBundle;
    this.classRegistry = registry;

    if (url && fetcher) {
      throw new Error('Arguments not supported: supply either `url` and optional `fetcherOptions` OR use a `fetcher` function for further customization.');
    }

    if (url) {
      this.fetcher = httpFetcher(url, fetcherOptions);
    } else if (fetcher) {
      if (fetcherOptions) {
        throw new Error('Arguments not supported: when specifying your own `fetcher`, set options through it and not with `fetcherOptions`');
      }

      this.fetcher = fetcher;
    } else {
      throw new Error('Invalid arguments: one of `url` or `fetcher` is needed.');
    }
  }

  /**
   * Creates a GraphQL document.
   *
   * @example
   * const document = client.document();
   *
   * @return {Document} A GraphQL document.
   */

  createClass(Client, [{
    key: 'document',
    value: function document() {
      return new Document(this.typeBundle);
    }

    /**
     * Creates a GraphQL query.
     *
     * @example
     * const query = client.query('myQuery', (root) => {
     *   root.add('cat', (cat) => {
     *    cat.add('name');
     *   });
     * });
     *
     * @param {String} [name] A name for the query.
     * @param {VariableDefinition[]} [variables] A list of variables in the query. See {@link Client#variable}.
     * @param {Function} selectionSetCallback The query builder callback.
     *   A {@link SelectionSet} is created using this callback.
     * @return {Query} A GraphQL query.
     */

  }, {
    key: 'query',
    value: function query() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(Query, [null].concat([this.typeBundle], args)))();
    }

    /**
     * Creates a GraphQL mutation.
     *
     * @example
     * const input = client.variable('input', 'CatCreateInput!');
     *
     * const mutation = client.mutation('myMutation', [input], (root) => {
     *   root.add('catCreate', {args: {input}}, (catCreate) => {
     *     catCreate.add('cat', (cat) => {
     *       cat.add('name');
     *     });
     *   });
     * });
     *
     * @param {String} [name] A name for the mutation.
     * @param {VariableDefinition[]} [variables] A list of variables in the mutation. See {@link Client#variable}.
     * @param {Function} selectionSetCallback The mutation builder callback.
     *   A {@link SelectionSet} is created using this callback.
     * @return {Mutation} A GraphQL mutation.
     */

  }, {
    key: 'mutation',
    value: function mutation() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return new (Function.prototype.bind.apply(Mutation, [null].concat([this.typeBundle], args)))();
    }

    /**
     * Sends a GraphQL operation (query or mutation) or a document.
     *
     * @example
     * client.send(query, {id: '12345'}).then((result) => {
     *   // Do something with the returned result
     *   console.log(result);
     * });
     *
     * @param {(Query|Mutation|Document|Function)} request The operation or document to send. If represented
     * as a function, it must return `Query`, `Mutation`, or `Document` and recieve the client as the only param.
     * @param {Object} [variableValues] The values for variables in the operation or document.
     * @param {Object} [otherProperties] Other properties to send with the query. For example, a custom operation name.
     * @param {Object} [headers] Additional headers to be applied on a request by request basis.
     * @return {Promise.<Object>} A promise resolving to an object containing the response data.
     */

  }, {
    key: 'send',
    value: function send(request) {
      var variableValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var _this = this;

      var otherProperties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      var operationOrDocument = void 0;

      if (Function.prototype.isPrototypeOf(request)) {
        operationOrDocument = request(this);
      } else {
        operationOrDocument = request;
      }

      var graphQLParams = { query: operationOrDocument.toString() };

      if (variableValues) {
        graphQLParams.variables = variableValues;
      }

      Object.assign(graphQLParams, otherProperties);

      var operation = void 0;

      if (Operation.prototype.isPrototypeOf(operationOrDocument)) {
        operation = operationOrDocument;
      } else {
        var document = operationOrDocument;

        if (document.operations.length === 1) {
          operation = document.operations[0];
        } else if (otherProperties.operationName) {
          operation = document.operations.find(function (documentOperation) {
            return documentOperation.name === otherProperties.operationName;
          });
        } else {
          throw new Error('\n          A document must contain exactly one operation, or an operationName\n          must be specified. Example:\n\n            client.send(document, null, {operationName: \'myFancyQuery\'});\n        ');
        }
      }

      return this.fetcher(graphQLParams, headers).then(function (response) {
        if (response.data) {
          response.model = decode(operation, response.data, {
            classRegistry: _this.classRegistry,
            variableValues: variableValues
          });
        }

        return response;
      });
    }

    /**
     * Fetches the next page of a paginated node or array of nodes.
     *
     * @example
     * client.fetchNextPage(node, {first: 10}).then((result) => {
     *   // Do something with the next page
     *   console.log(result);
     * });
     *
     * @param {(GraphModel|GraphModel[])} nodeOrNodes The node or list of nodes on which to fetch the next page.
     * @param {Object} [options] Options object containing:
     *   @param {Integer} [options.first] The number of nodes to query on the next page. Defaults to the page size of the previous query.
     * @return {Promise.<GraphModel[]>} A promise resolving with the next page of {@link GraphModel}s.
     */

  }, {
    key: 'fetchNextPage',
    value: function fetchNextPage(nodeOrNodes, options) {
      var node = void 0;

      if (Array.isArray(nodeOrNodes)) {
        node = nodeOrNodes[nodeOrNodes.length - 1];
      } else {
        node = nodeOrNodes;
      }

      var _node$nextPageQueryAn = node.nextPageQueryAndPath(),
          _node$nextPageQueryAn2 = slicedToArray(_node$nextPageQueryAn, 2),
          query = _node$nextPageQueryAn2[0],
          path = _node$nextPageQueryAn2[1];

      var variableValues = void 0;

      if (node.variableValues || options) {
        variableValues = Object.assign({}, node.variableValues, options);
      }

      return this.send(query, variableValues).then(function (response) {
        response.model = path.reduce(function (object, key) {
          return object[key];
        }, response.model);

        return response;
      });
    }

    /**
     * Fetches all subsequent pages of a paginated array of nodes.
     *
     * @example
     * client.fetchAllPages(nodes, {pageSize: 20}).then((result) => {
     *   // Do something with all the models
     *   console.log(result);
     * });
     *
     * @param {GraphModel[]} paginatedModels The list of nodes on which to fetch all pages.
     * @param {Object} options Options object containing:
     *   @param {Integer} options.pageSize The number of nodes to query on each page.
     * @return {Promise.<GraphModel[]>} A promise resolving with all pages of {@link GraphModel}s, including the original list.
     */

  }, {
    key: 'fetchAllPages',
    value: function fetchAllPages(paginatedModels, _ref2) {
      var _this2 = this;

      var pageSize = _ref2.pageSize;

      if (hasNextPage(paginatedModels)) {
        return this.fetchNextPage(paginatedModels, { first: pageSize }).then(function (_ref3) {
          var model = _ref3.model;

          var pages = paginatedModels.concat(model);

          return _this2.fetchAllPages(pages, { pageSize: pageSize });
        });
      }

      return Promise.resolve(paginatedModels);
    }

    /**
     * Refetches a {@link GraphModel} whose type implements `Node`.
     *
     * @example
     * client.refetch(node).then((result) => {
     *   // Do something with the refetched node
     *   console.log(result);
     * });
     *
     * @param {GraphModel} nodeType A {@link GraphModel} whose type implements `Node`.
     * @return {Promise.<GraphModel>} The refetched {@link GraphModel}.
     */

  }, {
    key: 'refetch',
    value: function refetch(nodeType) {
      if (!nodeType) {
        throw new Error('\'client#refetch\' must be called with a non-null instance of a Node.');
      } else if (!nodeType.type.implementsNode) {
        throw new Error('\'client#refetch\' must be called with a type that implements Node. Received ' + nodeType.type.name + '.');
      }

      return this.send(nodeType.refetchQuery()).then(function (_ref4) {
        var model = _ref4.model;
        return model.node;
      });
    }

    /**
     * Creates a variable to be used in a {@link Query} or {@link Mutation}.
     *
     * @example
     * const idVariable = client.variable('id', 'ID!', '12345');
     *
     * @param {String} name The name of the variable.
     * @param {String} type The GraphQL type of the variable.
     * @param {*} [defaultValue] The default value of the variable.
     * @return {VariableDefinition} A variable object that can be used in a {@link Query} or {@link Mutation}.
     */

  }, {
    key: 'variable',
    value: function variable$$1(name, type, defaultValue) {
      return variable(name, type, defaultValue);
    }

    /**
     * Creates an enum to be used in a {@link Query} or {@link Mutation}.
     *
     * @example
     * const titleEnum = client.enum('TITLE');
     *
     * @param {String} key The key of the enum.
     * @return {Enum} An enum object that can be used in a {@link Query} or {@link Mutation}.
     */

  }, {
    key: 'enum',
    value: function _enum(key) {
      return enumFunction(key);
    }
  }]);
  return Client;
}();

/**
 * The class used to configure the JS Buy SDK Client.
 * @class
 */
var Config = function () {
  createClass$1(Config, [{
    key: 'requiredProperties',


    /**
     * Properties that must be set on initializations
     * @attribute requiredProperties
     * @default ['storefrontAccessToken', 'domain']
     * @type Array
     * @private
     */
    get: function get$$1() {
      return ['storefrontAccessToken', 'domain'];
    }

    /**
     * Deprecated properties that map directly to required properties
     * @attribute deprecatedProperties
     * @default {'accessToken': 'storefrontAccessToken', 'apiKey': 'storefrontAccessToken'}
     * @type Object
     * @private
     */

  }, {
    key: 'deprecatedProperties',
    get: function get$$1() {
      return {
        accessToken: 'storefrontAccessToken',
        apiKey: 'storefrontAccessToken'
      };
    }

    /**
     * @constructs Config
     * @param {Object} attrs An object specifying the configuration. Requires the following properties:
     *   @param {String} attrs.storefrontAccessToken The {@link https://help.shopify.com/api/reference/storefront_access_token|Storefront access token} for the shop.
     *   @param {String} attrs.domain The `myshopify` domain for the shop (e.g. `graphql.myshopify.com`).
     */

  }]);

  function Config(attrs) {
    var _this = this;

    classCallCheck$1(this, Config);

    Object.keys(this.deprecatedProperties).forEach(function (key) {
      if (!attrs.hasOwnProperty(key)) {
        return;
      }
      // eslint-disable-next-line no-console
      console.warn('[ShopifyBuy] Config property ' + key + ' is deprecated as of v1.0, please use ' + _this.deprecatedProperties[key] + ' instead.');
      attrs[_this.deprecatedProperties[key]] = attrs[key];
    });

    this.requiredProperties.forEach(function (key) {
      if (attrs.hasOwnProperty(key)) {
        _this[key] = attrs[key];
      } else {
        throw new Error('new Config() requires the option \'' + key + '\'');
      }
    });

    if (attrs.hasOwnProperty('apiVersion')) {
      this.apiVersion = attrs.apiVersion;
    } else {
      this.apiVersion = '2024-04';
    }

    if (attrs.hasOwnProperty('source')) {
      this.source = attrs.source;
    }

    if (attrs.hasOwnProperty('language')) {
      this.language = attrs.language;
    }
  }

  return Config;
}();

var InputMapper = function () {
  function InputMapper() {
    classCallCheck$1(this, InputMapper);
  }

  createClass$1(InputMapper, [{
    key: 'create',
    value: function create() {
      var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var cartInput = {};

      if (input.presentmentCurrencyCode) {
        // eslint-disable-next-line no-console
        console.warn('presentmentCurrencyCode is not supported by the Cart API');
      }

      // SDK checkout input fields we can map:
      if (input.lineItems && input.lineItems.length) {
        cartInput.lines = input.lineItems.map(function (lineItem) {
          lineItem.merchandiseId = lineItem.variantId;
          delete lineItem.variantId;

          return lineItem;
        });
      }

      if (input.note) {
        cartInput.note = input.note;
      }

      if (input.email) {
        cartInput.buyerIdentity = { email: input.email };
      }

      if (input.shippingAddress) {
        if (!cartInput.buyerIdentity) {
          cartInput.buyerIdentity = {};
        }
        cartInput.buyerIdentity.deliveryAddressPreferences = [{ deliveryAddress: input.shippingAddress }];
      }

      if (input.customAttributes) {
        cartInput.attributes = input.customAttributes;
      }

      // Fields that aren't documented in SDK but could still be passed in:
      if (input.buyerIdentity) {
        if (!cartInput.buyerIdentity) {
          cartInput.buyerIdentity = {};
        }
        cartInput.buyerIdentity.countryCode = input.buyerIdentity.countryCode;
      }

      if (input.allowPartialAddresses) {
        // eslint-disable-next-line no-console
        console.warn('allowPartialAddresses is not supported by the Cart API');
      }

      return cartInput;
    }
  }, {
    key: 'updateAttributes',
    value: function updateAttributes(checkoutId, input) {
      var cartAttributesUpdateInput = {
        attributes: [],
        cartId: ''
      };

      var cartNoteUpdateInput = {
        cartId: '',
        note: ''
      };

      if (checkoutId) {
        cartAttributesUpdateInput.cartId = checkoutId;
        cartNoteUpdateInput.cartId = checkoutId;
      }

      if (input.customAttributes) {
        cartAttributesUpdateInput.attributes = input.customAttributes;
      }

      if (input.note) {
        cartNoteUpdateInput.note = input.note;
      }

      if (input.allowPartialAddresses) {
        // eslint-disable-next-line no-console
        console.warn('allowPartialAddresses is not supported by the Cart API');
      }

      // With cart, we will need to execute two separate mutations (one for attributes and one for note)
      return { cartAttributesUpdateInput: cartAttributesUpdateInput, cartNoteUpdateInput: cartNoteUpdateInput };
    }
  }, {
    key: 'updateEmail',
    value: function updateEmail(checkoutId, email) {
      var cartBuyerIdentityInput = {
        buyerIdentity: { email: email },
        cartId: checkoutId
      };

      return cartBuyerIdentityInput;
    }
  }, {
    key: 'addLineItems',
    value: function addLineItems(checkoutId, lineItems) {
      var lines = Array.isArray(lineItems) ? lineItems : [lineItems];

      return {
        cartId: checkoutId,
        lines: lines.map(mapLineItemToLine).filter(Boolean)
      };
    }
  }, {
    key: 'addDiscount',
    value: function addDiscount(checkoutId, discountCodes) {
      return {
        cartId: checkoutId,
        discountCodes: Array.isArray(discountCodes) ? discountCodes.flat() : []
      };
    }
  }, {
    key: 'removeDiscount',
    value: function removeDiscount(checkoutId) {
      return {
        cartId: checkoutId,
        discountCodes: []
      };
    }
  }, {
    key: 'addGiftCards',
    value: function addGiftCards(checkoutId, giftCardCodes) {
      return {
        cartId: checkoutId,
        giftCardCodes: giftCardCodes || []
      };
    }
  }, {
    key: 'removeGiftCard',
    value: function removeGiftCard(checkoutId, appliedGiftCardId) {
      return {
        cartId: checkoutId,
        appliedGiftCardIds: appliedGiftCardId ? [appliedGiftCardId] : []
      };
    }
  }, {
    key: 'removeLineItems',
    value: function removeLineItems(checkoutId, lineItemIds) {
      var lineIds = Array.isArray(lineItemIds) ? lineItemIds : [lineItemIds];

      return {
        cartId: checkoutId,
        lineIds: lineIds
      };
    }
  }, {
    key: 'replaceLineItems',
    value: function replaceLineItems(checkoutId, lineItems) {
      var lines = Array.isArray(lineItems) ? lineItems : [lineItems];

      return {
        cartId: checkoutId,
        lines: lines.map(mapLineItemToLine).filter(Boolean)
      };
    }
  }, {
    key: 'updateLineItems',
    value: function updateLineItems(checkoutId, lineItems) {
      var lines = Array.isArray(lineItems) ? lineItems : [lineItems];

      return {
        cartId: checkoutId,
        lines: lines.map(mapLineItemToLine).filter(Boolean)
      };
    }
  }, {
    key: 'updateShippingAddress',
    value: function updateShippingAddress(checkoutId, shippingAddress) {
      var deliveryAddress = {};

      if (shippingAddress.address1) {
        deliveryAddress.address1 = shippingAddress.address1;
      }

      if (shippingAddress.address2) {
        deliveryAddress.address2 = shippingAddress.address2;
      }

      if (shippingAddress.city) {
        deliveryAddress.city = shippingAddress.city;
      }

      if (shippingAddress.company) {
        deliveryAddress.company = shippingAddress.company;
      }

      if (shippingAddress.country) {
        deliveryAddress.country = shippingAddress.country;
      }

      if (shippingAddress.firstName) {
        deliveryAddress.firstName = shippingAddress.firstName;
      }

      if (shippingAddress.lastName) {
        deliveryAddress.lastName = shippingAddress.lastName;
      }

      if (shippingAddress.phone) {
        deliveryAddress.phone = shippingAddress.phone;
      }

      if (shippingAddress.zip) {
        deliveryAddress.zip = shippingAddress.zip;
      }

      if (shippingAddress.province) {
        deliveryAddress.province = shippingAddress.province;
      }

      var withDeliveryAddress = deliveryAddress && Object.keys(deliveryAddress).length > 0;

      return {
        cartId: checkoutId,
        buyerIdentity: {
          deliveryAddressPreferences: withDeliveryAddress ? [{ deliveryAddress: deliveryAddress }] : []
        }
      };
    }
  }]);
  return InputMapper;
}();

function mapLineItemToLine(lineItem) {
  var line = {};

  if (typeof lineItem.id !== 'undefined') {
    line.id = lineItem.id;
  }

  if (typeof lineItem.customAttributes !== 'undefined') {
    line.attributes = lineItem.customAttributes;
  }

  if (typeof lineItem.quantity !== 'undefined') {
    line.quantity = lineItem.quantity;
  }

  if (typeof lineItem.variantId !== 'undefined') {
    line.merchandiseId = lineItem.variantId;
  }

  if (typeof lineItem.sellingPlanId !== 'undefined') {
    line.sellingPlanId = lineItem.sellingPlanId;
  }

  if (Object.keys(line).length === 0) {
    return null;
  }

  return line;
}

var Resource = function Resource(client) {
  classCallCheck$1(this, Resource);

  this.graphQLClient = client;
  this.inputMapper = new InputMapper();
};

var defaultErrors = [{ message: 'an unknown error has occurred.' }];

function defaultResolver(path) {
  var keys = path.split('.');

  return function (_ref) {
    var model = _ref.model,
        errors = _ref.errors;

    return new Promise(function (resolve, reject) {
      try {
        var result = keys.reduce(function (ref, key) {
          return ref[key];
        }, model);

        resolve(result);
      } catch (_) {
        if (errors) {
          reject(errors);
        } else {
          reject(defaultErrors);
        }
      }
    });
  };
}

function fetchResourcesForProducts(productOrProduct, client) {
  var products = [].concat(productOrProduct);

  return Promise.all(products.reduce(function (promiseAcc, product) {

    // If the graphql query doesn't find a match, skip fetching variants and images.
    if (product === null) {
      return promiseAcc;
    }

    // Fetch the rest of the images and variants for this product
    promiseAcc.push(client.fetchAllPages(product.images, { pageSize: 250 }).then(function (images) {
      product.attrs.images = images;
    }));

    promiseAcc.push(client.fetchAllPages(product.variants, { pageSize: 250 }).then(function (variants) {
      product.attrs.variants = variants;
    }));

    return promiseAcc;
  }, []));
}

function paginateProductConnectionsAndResolve(client) {
  return function (products) {
    return fetchResourcesForProducts(products, client).then(function () {
      return products;
    });
  };
}

function paginateCollectionsProductConnectionsAndResolve(client) {
  return function (collectionOrCollections) {
    var collections = [].concat(collectionOrCollections);

    return Promise.all(collections.reduce(function (promiseAcc, collection) {
      return promiseAcc.concat(fetchResourcesForProducts(collection.products, client));
    }, [])).then(function () {
      return collectionOrCollections;
    });
  };
}

/**
 * @namespace ProductHelpers
 */
var productHelpers = {

  /**
   * Returns the variant of a product corresponding to the options given.
   *
   * @example
   * const selectedVariant = client.product.helpers.variantForOptions(product, {
   *   size: "Small",
   *   color: "Red"
   * });
   *
   * @memberof ProductHelpers
   * @method variantForOptions
   * @param {GraphModel} product The product to find the variant on. Must include `variants`.
   * @param {Object} options An object containing the options for the variant.
   * @return {GraphModel} The variant corresponding to the options given.
   */
  variantForOptions: function variantForOptions(product, options) {
    return product.variants.find(function (variant) {
      return variant.selectedOptions.every(function (selectedOption) {
        return options[selectedOption.name] === selectedOption.value.valueOf();
      });
    });
  }
};

function query(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.id = client.variable("id", "ID!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price", function (price) {
      price.add("amount");
      price.add("currencyCode");
    });
    root.add("price", {
      alias: "priceV2"
    }, function (price) {
      price.add("amount");
      price.add("currencyCode");
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice", function (compareAtPrice) {
      compareAtPrice.add("amount");
      compareAtPrice.add("currencyCode");
    });
    root.add("compareAtPrice", {
      alias: "compareAtPriceV2"
    }, function (compareAtPrice) {
      compareAtPrice.add("amount");
      compareAtPrice.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("url", {
        alias: "src"
      });
      image.add("altText");
      image.add("width");
      image.add("height");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
    root.add("sellingPlanAllocations", {
      args: {
        first: 3
      }
    }, function (sellingPlanAllocations) {
      sellingPlanAllocations.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      sellingPlanAllocations.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("sellingPlan", function (sellingPlan) {
            sellingPlan.add("id");
            sellingPlan.add("name");
            sellingPlan.add("options", function (options) {
              options.add("name");
              options.add("value");
            });
          });
        });
      });
    });
  });
  spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
    root.add("id");
    root.add("availableForSale");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("descriptionHtml");
    root.add("description");
    root.add("handle");
    root.add("productType");
    root.add("title");
    root.add("vendor");
    root.add("publishedAt");
    root.add("onlineStoreUrl");
    root.add("requiresSellingPlan");
    root.add("sellingPlanGroups", {
      args: {
        first: 2
      }
    }, function (sellingPlanGroups) {
      sellingPlanGroups.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      sellingPlanGroups.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("name");
          node.add("options", function (options) {
            options.add("name");
            options.add("values");
          });
          node.add("sellingPlans", {
            args: {
              first: 3
            }
          }, function (sellingPlans) {
            sellingPlans.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            sellingPlans.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("id");
                node.add("name");
                node.add("description");
                node.add("recurringDeliveries");
                node.add("options", function (options) {
                  options.add("name");
                  options.add("value");
                });
              });
            });
          });
        });
      });
    });
    root.add("options", function (options) {
      options.add("name");
      options.add("values");
    });
    root.add("images", {
      args: {
        first: 250
      }
    }, function (images) {
      images.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      images.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("url", {
            alias: "src"
          });
          node.add("altText");
          node.add("width");
          node.add("height");
        });
      });
    });
    root.add("variants", {
      args: {
        first: 250
      }
    }, function (variants) {
      variants.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      variants.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.VariantFragment);
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.id], function (root) {
    root.add("node", {
      args: {
        id: variables.__defaultOperation__.id
      }
    }, function (node) {
      node.addFragment(spreads.ProductFragment);
    });
  }, client.internationalizationDirective);
  return document;
}

function query$1(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.ids = client.variable("ids", "[ID!]!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price", function (price) {
      price.add("amount");
      price.add("currencyCode");
    });
    root.add("price", {
      alias: "priceV2"
    }, function (price) {
      price.add("amount");
      price.add("currencyCode");
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice", function (compareAtPrice) {
      compareAtPrice.add("amount");
      compareAtPrice.add("currencyCode");
    });
    root.add("compareAtPrice", {
      alias: "compareAtPriceV2"
    }, function (compareAtPrice) {
      compareAtPrice.add("amount");
      compareAtPrice.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("url", {
        alias: "src"
      });
      image.add("altText");
      image.add("width");
      image.add("height");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
    root.add("sellingPlanAllocations", {
      args: {
        first: 3
      }
    }, function (sellingPlanAllocations) {
      sellingPlanAllocations.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      sellingPlanAllocations.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("sellingPlan", function (sellingPlan) {
            sellingPlan.add("id");
            sellingPlan.add("name");
            sellingPlan.add("options", function (options) {
              options.add("name");
              options.add("value");
            });
          });
        });
      });
    });
  });
  spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
    root.add("id");
    root.add("availableForSale");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("descriptionHtml");
    root.add("description");
    root.add("handle");
    root.add("productType");
    root.add("title");
    root.add("vendor");
    root.add("publishedAt");
    root.add("onlineStoreUrl");
    root.add("requiresSellingPlan");
    root.add("sellingPlanGroups", {
      args: {
        first: 2
      }
    }, function (sellingPlanGroups) {
      sellingPlanGroups.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      sellingPlanGroups.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("name");
          node.add("options", function (options) {
            options.add("name");
            options.add("values");
          });
          node.add("sellingPlans", {
            args: {
              first: 3
            }
          }, function (sellingPlans) {
            sellingPlans.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            sellingPlans.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("id");
                node.add("name");
                node.add("description");
                node.add("recurringDeliveries");
                node.add("options", function (options) {
                  options.add("name");
                  options.add("value");
                });
              });
            });
          });
        });
      });
    });
    root.add("options", function (options) {
      options.add("name");
      options.add("values");
    });
    root.add("images", {
      args: {
        first: 250
      }
    }, function (images) {
      images.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      images.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("url", {
            alias: "src"
          });
          node.add("altText");
          node.add("width");
          node.add("height");
        });
      });
    });
    root.add("variants", {
      args: {
        first: 250
      }
    }, function (variants) {
      variants.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      variants.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.VariantFragment);
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.ids], function (root) {
    root.add("nodes", {
      args: {
        ids: variables.__defaultOperation__.ids
      }
    }, function (nodes) {
      nodes.addFragment(spreads.ProductFragment);
    });
  }, client.internationalizationDirective);
  return document;
}

function query$2(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.first = client.variable("first", "Int!");
  variables.__defaultOperation__.query = client.variable("query", "String");
  variables.__defaultOperation__.sortKey = client.variable("sortKey", "ProductSortKeys");
  variables.__defaultOperation__.reverse = client.variable("reverse", "Boolean");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price", function (price) {
      price.add("amount");
      price.add("currencyCode");
    });
    root.add("price", {
      alias: "priceV2"
    }, function (price) {
      price.add("amount");
      price.add("currencyCode");
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice", function (compareAtPrice) {
      compareAtPrice.add("amount");
      compareAtPrice.add("currencyCode");
    });
    root.add("compareAtPrice", {
      alias: "compareAtPriceV2"
    }, function (compareAtPrice) {
      compareAtPrice.add("amount");
      compareAtPrice.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("url", {
        alias: "src"
      });
      image.add("altText");
      image.add("width");
      image.add("height");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
    root.add("sellingPlanAllocations", {
      args: {
        first: 3
      }
    }, function (sellingPlanAllocations) {
      sellingPlanAllocations.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      sellingPlanAllocations.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("sellingPlan", function (sellingPlan) {
            sellingPlan.add("id");
            sellingPlan.add("name");
            sellingPlan.add("options", function (options) {
              options.add("name");
              options.add("value");
            });
          });
        });
      });
    });
  });
  spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
    root.add("id");
    root.add("availableForSale");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("descriptionHtml");
    root.add("description");
    root.add("handle");
    root.add("productType");
    root.add("title");
    root.add("vendor");
    root.add("publishedAt");
    root.add("onlineStoreUrl");
    root.add("requiresSellingPlan");
    root.add("sellingPlanGroups", {
      args: {
        first: 2
      }
    }, function (sellingPlanGroups) {
      sellingPlanGroups.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      sellingPlanGroups.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("name");
          node.add("options", function (options) {
            options.add("name");
            options.add("values");
          });
          node.add("sellingPlans", {
            args: {
              first: 3
            }
          }, function (sellingPlans) {
            sellingPlans.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            sellingPlans.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("id");
                node.add("name");
                node.add("description");
                node.add("recurringDeliveries");
                node.add("options", function (options) {
                  options.add("name");
                  options.add("value");
                });
              });
            });
          });
        });
      });
    });
    root.add("options", function (options) {
      options.add("name");
      options.add("values");
    });
    root.add("images", {
      args: {
        first: 250
      }
    }, function (images) {
      images.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      images.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("url", {
            alias: "src"
          });
          node.add("altText");
          node.add("width");
          node.add("height");
        });
      });
    });
    root.add("variants", {
      args: {
        first: 250
      }
    }, function (variants) {
      variants.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      variants.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.VariantFragment);
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.first, variables.__defaultOperation__.query, variables.__defaultOperation__.sortKey, variables.__defaultOperation__.reverse], function (root) {
    root.add("products", {
      args: {
        first: variables.__defaultOperation__.first,
        query: variables.__defaultOperation__.query,
        sortKey: variables.__defaultOperation__.sortKey,
        reverse: variables.__defaultOperation__.reverse
      }
    }, function (products) {
      products.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      products.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.ProductFragment);
        });
      });
    });
  }, client.internationalizationDirective);
  return document;
}

function query$3(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.handle = client.variable("handle", "String!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price", function (price) {
      price.add("amount");
      price.add("currencyCode");
    });
    root.add("price", {
      alias: "priceV2"
    }, function (price) {
      price.add("amount");
      price.add("currencyCode");
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice", function (compareAtPrice) {
      compareAtPrice.add("amount");
      compareAtPrice.add("currencyCode");
    });
    root.add("compareAtPrice", {
      alias: "compareAtPriceV2"
    }, function (compareAtPrice) {
      compareAtPrice.add("amount");
      compareAtPrice.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("url", {
        alias: "src"
      });
      image.add("altText");
      image.add("width");
      image.add("height");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
    root.add("sellingPlanAllocations", {
      args: {
        first: 3
      }
    }, function (sellingPlanAllocations) {
      sellingPlanAllocations.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      sellingPlanAllocations.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("sellingPlan", function (sellingPlan) {
            sellingPlan.add("id");
            sellingPlan.add("name");
            sellingPlan.add("options", function (options) {
              options.add("name");
              options.add("value");
            });
          });
        });
      });
    });
  });
  spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
    root.add("id");
    root.add("availableForSale");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("descriptionHtml");
    root.add("description");
    root.add("handle");
    root.add("productType");
    root.add("title");
    root.add("vendor");
    root.add("publishedAt");
    root.add("onlineStoreUrl");
    root.add("requiresSellingPlan");
    root.add("sellingPlanGroups", {
      args: {
        first: 2
      }
    }, function (sellingPlanGroups) {
      sellingPlanGroups.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      sellingPlanGroups.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("name");
          node.add("options", function (options) {
            options.add("name");
            options.add("values");
          });
          node.add("sellingPlans", {
            args: {
              first: 3
            }
          }, function (sellingPlans) {
            sellingPlans.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            sellingPlans.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("id");
                node.add("name");
                node.add("description");
                node.add("recurringDeliveries");
                node.add("options", function (options) {
                  options.add("name");
                  options.add("value");
                });
              });
            });
          });
        });
      });
    });
    root.add("options", function (options) {
      options.add("name");
      options.add("values");
    });
    root.add("images", {
      args: {
        first: 250
      }
    }, function (images) {
      images.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      images.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("url", {
            alias: "src"
          });
          node.add("altText");
          node.add("width");
          node.add("height");
        });
      });
    });
    root.add("variants", {
      args: {
        first: 250
      }
    }, function (variants) {
      variants.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      variants.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.VariantFragment);
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.handle], function (root) {
    root.add("productByHandle", {
      args: {
        handle: variables.__defaultOperation__.handle
      }
    }, function (productByHandle) {
      productByHandle.addFragment(spreads.ProductFragment);
    });
  }, client.internationalizationDirective);
  return document;
}

function query$4(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.productId = client.variable("productId", "ID!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price", function (price) {
      price.add("amount");
      price.add("currencyCode");
    });
    root.add("price", {
      alias: "priceV2"
    }, function (price) {
      price.add("amount");
      price.add("currencyCode");
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice", function (compareAtPrice) {
      compareAtPrice.add("amount");
      compareAtPrice.add("currencyCode");
    });
    root.add("compareAtPrice", {
      alias: "compareAtPriceV2"
    }, function (compareAtPrice) {
      compareAtPrice.add("amount");
      compareAtPrice.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("url", {
        alias: "src"
      });
      image.add("altText");
      image.add("width");
      image.add("height");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
    root.add("sellingPlanAllocations", {
      args: {
        first: 3
      }
    }, function (sellingPlanAllocations) {
      sellingPlanAllocations.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      sellingPlanAllocations.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("sellingPlan", function (sellingPlan) {
            sellingPlan.add("id");
            sellingPlan.add("name");
            sellingPlan.add("options", function (options) {
              options.add("name");
              options.add("value");
            });
          });
        });
      });
    });
  });
  spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
    root.add("id");
    root.add("availableForSale");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("descriptionHtml");
    root.add("description");
    root.add("handle");
    root.add("productType");
    root.add("title");
    root.add("vendor");
    root.add("publishedAt");
    root.add("onlineStoreUrl");
    root.add("requiresSellingPlan");
    root.add("sellingPlanGroups", {
      args: {
        first: 2
      }
    }, function (sellingPlanGroups) {
      sellingPlanGroups.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      sellingPlanGroups.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("name");
          node.add("options", function (options) {
            options.add("name");
            options.add("values");
          });
          node.add("sellingPlans", {
            args: {
              first: 3
            }
          }, function (sellingPlans) {
            sellingPlans.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            sellingPlans.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("id");
                node.add("name");
                node.add("description");
                node.add("recurringDeliveries");
                node.add("options", function (options) {
                  options.add("name");
                  options.add("value");
                });
              });
            });
          });
        });
      });
    });
    root.add("options", function (options) {
      options.add("name");
      options.add("values");
    });
    root.add("images", {
      args: {
        first: 250
      }
    }, function (images) {
      images.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      images.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("url", {
            alias: "src"
          });
          node.add("altText");
          node.add("width");
          node.add("height");
        });
      });
    });
    root.add("variants", {
      args: {
        first: 250
      }
    }, function (variants) {
      variants.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      variants.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.VariantFragment);
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.productId], function (root) {
    root.add("productRecommendations", {
      args: {
        productId: variables.__defaultOperation__.productId
      }
    }, function (productRecommendations) {
      productRecommendations.addFragment(spreads.ProductFragment);
    });
  }, client.internationalizationDirective);
  return document;
}

// GraphQL
/**
 * The JS Buy SDK product resource
 * @class
 */

var ProductResource = function (_Resource) {
  inherits$1(ProductResource, _Resource);

  function ProductResource() {
    classCallCheck$1(this, ProductResource);
    return possibleConstructorReturn$1(this, (ProductResource.__proto__ || Object.getPrototypeOf(ProductResource)).apply(this, arguments));
  }

  createClass$1(ProductResource, [{
    key: 'fetchAll',


    /**
     * Fetches all products on the shop.
     *
     * @example
     * client.product.fetchAll().then((products) => {
     *   // Do something with the products
     * });
     *
     * @param {Int} [pageSize] The number of products to fetch per page
     * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the products.
     */
    value: function fetchAll() {
      var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;

      return this.graphQLClient.send(query$2, { first: first }).then(defaultResolver('products')).then(paginateProductConnectionsAndResolve(this.graphQLClient));
    }

    /**
     * Fetches a single product by ID on the shop.
     *
     * @example
     * client.product.fetch('Xk9lM2JkNzFmNzIQ4NTIY4ZDFi9DaGVja291dC9lM2JkN==').then((product) => {
     *   // Do something with the product
     * });
     *
     * @param {String} id The id of the product to fetch.
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the product.
     */

  }, {
    key: 'fetch',
    value: function fetch(id) {
      return this.graphQLClient.send(query, { id: id }).then(defaultResolver('node')).then(paginateProductConnectionsAndResolve(this.graphQLClient));
    }

    /**
     * Fetches multiple products by ID on the shop.
     *
     * @example
     * const ids = ['Xk9lM2JkNzFmNzIQ4NTIY4ZDFi9DaGVja291dC9lM2JkN==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ='];
     * client.product.fetchMultiple(ids).then((products) => {
     *   // Do something with the products
     * });
     *
     * @param {String[]} ids The ids of the products to fetch
     * @return {Promise|GraphModel[]} A promise resolving with a `GraphModel` of the product.
     */

  }, {
    key: 'fetchMultiple',
    value: function fetchMultiple(ids) {
      return this.graphQLClient.send(query$1, { ids: ids }).then(defaultResolver('nodes')).then(paginateProductConnectionsAndResolve(this.graphQLClient));
    }

    /**
     * Fetches a single product by handle on the shop.
     *
     * @example
     * client.product.fetchByHandle('my-product').then((product) => {
     *   // Do something with the product
     * });
     *
     * @param {String} handle The handle of the product to fetch.
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the product.
     */

  }, {
    key: 'fetchByHandle',
    value: function fetchByHandle(handle) {
      return this.graphQLClient.send(query$3, { handle: handle }).then(defaultResolver('productByHandle')).then(paginateProductConnectionsAndResolve(this.graphQLClient));
    }

    /**
     * Fetches all products on the shop that match the query.
     *
     * @example
     * client.product.fetchQuery({first: 20, sortKey: 'CREATED_AT', reverse: true}).then((products) => {
     *   // Do something with the first 10 products sorted by title in ascending order
     * });
     *
     * @param {Object} [args] An object specifying the query data containing zero or more of:
     *   @param {Int} [args.first=20] The relay `first` param. This specifies page size.
     *   @param {String} [args.sortKey=ID] The key to sort results by. Available values are
     *   documented as {@link https://help.shopify.com/api/storefront-api/reference/enum/productsortkeys|Product Sort Keys}.
     *   @param {String} [args.query] A query string. See full documentation {@link https://help.shopify.com/api/storefront-api/reference/object/shop#products|here}
     *   @param {Boolean} [args.reverse] Whether or not to reverse the sort order of the results
     * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the products.
     */

  }, {
    key: 'fetchQuery',
    value: function fetchQuery() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$first = _ref.first,
          first = _ref$first === undefined ? 20 : _ref$first,
          _ref$sortKey = _ref.sortKey,
          sortKey = _ref$sortKey === undefined ? 'ID' : _ref$sortKey,
          query$$1 = _ref.query,
          reverse = _ref.reverse;

      return this.graphQLClient.send(query$2, {
        first: first,
        sortKey: sortKey,
        query: query$$1,
        reverse: reverse
      }).then(defaultResolver('products')).then(paginateProductConnectionsAndResolve(this.graphQLClient));
    }

    /**
     * Find recommended products related to a given productId.
     * To learn more about how recommendations are generated, see https://shopify.dev/themes/product-merchandising/recommendations.
     *
     * @example
     * const productId 'Xk9lM2JkNzFmNzIQ4NTIY4ZDFi9DaGVja291dC9lM2JkN==';
     * client.product.fetchProductRecommendations(productId).then((products) => {
     *   // Do something with the products
     * });
     *
     * @param {String} productId The id of the product to fetch.
     * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the products.
     */

  }, {
    key: 'fetchRecommendations',
    value: function fetchRecommendations(productId) {
      return this.graphQLClient.send(query$4, { productId: productId }).then(defaultResolver('productRecommendations')).then(paginateProductConnectionsAndResolve(this.graphQLClient));
    }
  }, {
    key: 'helpers',
    get: function get$$1() {
      return productHelpers;
    }
  }]);
  return ProductResource;
}(Resource);

function query$5(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.id = client.variable("id", "ID!");
  spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function (root) {
    root.add("id");
    root.add("handle");
    root.add("description");
    root.add("descriptionHtml");
    root.add("updatedAt");
    root.add("title");
    root.add("image", function (image) {
      image.add("id");
      image.add("url", {
        alias: "src"
      });
      image.add("altText");
    });
  });
  document.addQuery([variables.__defaultOperation__.id], function (root) {
    root.add("node", {
      args: {
        id: variables.__defaultOperation__.id
      }
    }, function (node) {
      node.addFragment(spreads.CollectionFragment);
    });
  }, client.internationalizationDirective);
  return document;
}

function query$6(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.id = client.variable("id", "ID!");
  variables.__defaultOperation__.productsFirst = client.variable("productsFirst", "Int!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price", function (price) {
      price.add("amount");
      price.add("currencyCode");
    });
    root.add("price", {
      alias: "priceV2"
    }, function (price) {
      price.add("amount");
      price.add("currencyCode");
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice", function (compareAtPrice) {
      compareAtPrice.add("amount");
      compareAtPrice.add("currencyCode");
    });
    root.add("compareAtPrice", {
      alias: "compareAtPriceV2"
    }, function (compareAtPrice) {
      compareAtPrice.add("amount");
      compareAtPrice.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("url", {
        alias: "src"
      });
      image.add("altText");
      image.add("width");
      image.add("height");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
    root.add("sellingPlanAllocations", {
      args: {
        first: 3
      }
    }, function (sellingPlanAllocations) {
      sellingPlanAllocations.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      sellingPlanAllocations.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("sellingPlan", function (sellingPlan) {
            sellingPlan.add("id");
            sellingPlan.add("name");
            sellingPlan.add("options", function (options) {
              options.add("name");
              options.add("value");
            });
          });
        });
      });
    });
  });
  spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function (root) {
    root.add("id");
    root.add("handle");
    root.add("description");
    root.add("descriptionHtml");
    root.add("updatedAt");
    root.add("title");
    root.add("image", function (image) {
      image.add("id");
      image.add("url", {
        alias: "src"
      });
      image.add("altText");
    });
  });
  spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
    root.add("id");
    root.add("availableForSale");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("descriptionHtml");
    root.add("description");
    root.add("handle");
    root.add("productType");
    root.add("title");
    root.add("vendor");
    root.add("publishedAt");
    root.add("onlineStoreUrl");
    root.add("requiresSellingPlan");
    root.add("sellingPlanGroups", {
      args: {
        first: 2
      }
    }, function (sellingPlanGroups) {
      sellingPlanGroups.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      sellingPlanGroups.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("name");
          node.add("options", function (options) {
            options.add("name");
            options.add("values");
          });
          node.add("sellingPlans", {
            args: {
              first: 3
            }
          }, function (sellingPlans) {
            sellingPlans.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            sellingPlans.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("id");
                node.add("name");
                node.add("description");
                node.add("recurringDeliveries");
                node.add("options", function (options) {
                  options.add("name");
                  options.add("value");
                });
              });
            });
          });
        });
      });
    });
    root.add("options", function (options) {
      options.add("name");
      options.add("values");
    });
    root.add("images", {
      args: {
        first: 250
      }
    }, function (images) {
      images.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      images.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("url", {
            alias: "src"
          });
          node.add("altText");
          node.add("width");
          node.add("height");
        });
      });
    });
    root.add("variants", {
      args: {
        first: 250
      }
    }, function (variants) {
      variants.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      variants.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.VariantFragment);
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.id, variables.__defaultOperation__.productsFirst], function (root) {
    root.add("node", {
      args: {
        id: variables.__defaultOperation__.id
      }
    }, function (node) {
      node.addFragment(spreads.CollectionFragment);
      node.addInlineFragmentOn("Collection", function (Collection) {
        Collection.add("products", {
          args: {
            first: variables.__defaultOperation__.productsFirst
          }
        }, function (products) {
          products.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          products.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.addFragment(spreads.ProductFragment);
            });
          });
        });
      });
    });
  }, client.internationalizationDirective);
  return document;
}

function query$7(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.first = client.variable("first", "Int!");
  variables.__defaultOperation__.query = client.variable("query", "String");
  variables.__defaultOperation__.sortKey = client.variable("sortKey", "CollectionSortKeys");
  variables.__defaultOperation__.reverse = client.variable("reverse", "Boolean");
  spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function (root) {
    root.add("id");
    root.add("handle");
    root.add("description");
    root.add("descriptionHtml");
    root.add("updatedAt");
    root.add("title");
    root.add("image", function (image) {
      image.add("id");
      image.add("url", {
        alias: "src"
      });
      image.add("altText");
    });
  });
  document.addQuery([variables.__defaultOperation__.first, variables.__defaultOperation__.query, variables.__defaultOperation__.sortKey, variables.__defaultOperation__.reverse], function (root) {
    root.add("collections", {
      args: {
        first: variables.__defaultOperation__.first,
        query: variables.__defaultOperation__.query,
        sortKey: variables.__defaultOperation__.sortKey,
        reverse: variables.__defaultOperation__.reverse
      }
    }, function (collections) {
      collections.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      collections.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.CollectionFragment);
        });
      });
    });
  }, client.internationalizationDirective);
  return document;
}

function query$8(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.first = client.variable("first", "Int!");
  variables.__defaultOperation__.query = client.variable("query", "String");
  variables.__defaultOperation__.sortKey = client.variable("sortKey", "CollectionSortKeys");
  variables.__defaultOperation__.reverse = client.variable("reverse", "Boolean");
  variables.__defaultOperation__.productsFirst = client.variable("productsFirst", "Int!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price", function (price) {
      price.add("amount");
      price.add("currencyCode");
    });
    root.add("price", {
      alias: "priceV2"
    }, function (price) {
      price.add("amount");
      price.add("currencyCode");
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice", function (compareAtPrice) {
      compareAtPrice.add("amount");
      compareAtPrice.add("currencyCode");
    });
    root.add("compareAtPrice", {
      alias: "compareAtPriceV2"
    }, function (compareAtPrice) {
      compareAtPrice.add("amount");
      compareAtPrice.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("url", {
        alias: "src"
      });
      image.add("altText");
      image.add("width");
      image.add("height");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
    root.add("sellingPlanAllocations", {
      args: {
        first: 3
      }
    }, function (sellingPlanAllocations) {
      sellingPlanAllocations.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      sellingPlanAllocations.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("sellingPlan", function (sellingPlan) {
            sellingPlan.add("id");
            sellingPlan.add("name");
            sellingPlan.add("options", function (options) {
              options.add("name");
              options.add("value");
            });
          });
        });
      });
    });
  });
  spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function (root) {
    root.add("id");
    root.add("handle");
    root.add("description");
    root.add("descriptionHtml");
    root.add("updatedAt");
    root.add("title");
    root.add("image", function (image) {
      image.add("id");
      image.add("url", {
        alias: "src"
      });
      image.add("altText");
    });
  });
  spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
    root.add("id");
    root.add("availableForSale");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("descriptionHtml");
    root.add("description");
    root.add("handle");
    root.add("productType");
    root.add("title");
    root.add("vendor");
    root.add("publishedAt");
    root.add("onlineStoreUrl");
    root.add("requiresSellingPlan");
    root.add("sellingPlanGroups", {
      args: {
        first: 2
      }
    }, function (sellingPlanGroups) {
      sellingPlanGroups.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      sellingPlanGroups.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("name");
          node.add("options", function (options) {
            options.add("name");
            options.add("values");
          });
          node.add("sellingPlans", {
            args: {
              first: 3
            }
          }, function (sellingPlans) {
            sellingPlans.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            sellingPlans.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("id");
                node.add("name");
                node.add("description");
                node.add("recurringDeliveries");
                node.add("options", function (options) {
                  options.add("name");
                  options.add("value");
                });
              });
            });
          });
        });
      });
    });
    root.add("options", function (options) {
      options.add("name");
      options.add("values");
    });
    root.add("images", {
      args: {
        first: 250
      }
    }, function (images) {
      images.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      images.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("url", {
            alias: "src"
          });
          node.add("altText");
          node.add("width");
          node.add("height");
        });
      });
    });
    root.add("variants", {
      args: {
        first: 250
      }
    }, function (variants) {
      variants.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      variants.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.VariantFragment);
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.first, variables.__defaultOperation__.query, variables.__defaultOperation__.sortKey, variables.__defaultOperation__.reverse, variables.__defaultOperation__.productsFirst], function (root) {
    root.add("collections", {
      args: {
        first: variables.__defaultOperation__.first,
        query: variables.__defaultOperation__.query,
        sortKey: variables.__defaultOperation__.sortKey,
        reverse: variables.__defaultOperation__.reverse
      }
    }, function (collections) {
      collections.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      collections.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.CollectionFragment);
          node.add("products", {
            args: {
              first: variables.__defaultOperation__.productsFirst
            }
          }, function (products) {
            products.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            products.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.addFragment(spreads.ProductFragment);
              });
            });
          });
        });
      });
    });
  }, client.internationalizationDirective);
  return document;
}

function query$9(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.handle = client.variable("handle", "String!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price", function (price) {
      price.add("amount");
      price.add("currencyCode");
    });
    root.add("price", {
      alias: "priceV2"
    }, function (price) {
      price.add("amount");
      price.add("currencyCode");
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice", function (compareAtPrice) {
      compareAtPrice.add("amount");
      compareAtPrice.add("currencyCode");
    });
    root.add("compareAtPrice", {
      alias: "compareAtPriceV2"
    }, function (compareAtPrice) {
      compareAtPrice.add("amount");
      compareAtPrice.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("url", {
        alias: "src"
      });
      image.add("altText");
      image.add("width");
      image.add("height");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
    root.add("sellingPlanAllocations", {
      args: {
        first: 3
      }
    }, function (sellingPlanAllocations) {
      sellingPlanAllocations.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      sellingPlanAllocations.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("sellingPlan", function (sellingPlan) {
            sellingPlan.add("id");
            sellingPlan.add("name");
            sellingPlan.add("options", function (options) {
              options.add("name");
              options.add("value");
            });
          });
        });
      });
    });
  });
  spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
    root.add("id");
    root.add("availableForSale");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("descriptionHtml");
    root.add("description");
    root.add("handle");
    root.add("productType");
    root.add("title");
    root.add("vendor");
    root.add("publishedAt");
    root.add("onlineStoreUrl");
    root.add("requiresSellingPlan");
    root.add("sellingPlanGroups", {
      args: {
        first: 2
      }
    }, function (sellingPlanGroups) {
      sellingPlanGroups.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      sellingPlanGroups.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("name");
          node.add("options", function (options) {
            options.add("name");
            options.add("values");
          });
          node.add("sellingPlans", {
            args: {
              first: 3
            }
          }, function (sellingPlans) {
            sellingPlans.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            sellingPlans.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("id");
                node.add("name");
                node.add("description");
                node.add("recurringDeliveries");
                node.add("options", function (options) {
                  options.add("name");
                  options.add("value");
                });
              });
            });
          });
        });
      });
    });
    root.add("options", function (options) {
      options.add("name");
      options.add("values");
    });
    root.add("images", {
      args: {
        first: 250
      }
    }, function (images) {
      images.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      images.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("url", {
            alias: "src"
          });
          node.add("altText");
          node.add("width");
          node.add("height");
        });
      });
    });
    root.add("variants", {
      args: {
        first: 250
      }
    }, function (variants) {
      variants.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      variants.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.VariantFragment);
        });
      });
    });
  });
  spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function (root) {
    root.add("id");
    root.add("handle");
    root.add("description");
    root.add("descriptionHtml");
    root.add("updatedAt");
    root.add("title");
    root.add("image", function (image) {
      image.add("id");
      image.add("url", {
        alias: "src"
      });
      image.add("altText");
    });
  });
  spreads.CollectionsProductsFragment = document.defineFragment("CollectionsProductsFragment", "Collection", function (root) {
    root.add("products", {
      args: {
        first: 20
      }
    }, function (products) {
      products.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      products.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.ProductFragment);
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.handle], function (root) {
    root.add("collectionByHandle", {
      args: {
        handle: variables.__defaultOperation__.handle
      }
    }, function (collectionByHandle) {
      collectionByHandle.addFragment(spreads.CollectionFragment);
      collectionByHandle.addFragment(spreads.CollectionsProductsFragment);
    });
  }, client.internationalizationDirective);
  return document;
}

// GraphQL
/**
 * The JS Buy SDK collection resource
 * @class
 */

var CollectionResource = function (_Resource) {
  inherits$1(CollectionResource, _Resource);

  function CollectionResource() {
    classCallCheck$1(this, CollectionResource);
    return possibleConstructorReturn$1(this, (CollectionResource.__proto__ || Object.getPrototypeOf(CollectionResource)).apply(this, arguments));
  }

  createClass$1(CollectionResource, [{
    key: 'fetchAll',


    /**
     * Fetches all collections on the shop, not including products.
     * To fetch collections with products use [fetchAllsWithProducts]{@link Client#fetchAllsWithProducts}.
     *
     * @example
     * client.collection.fetchAll().then((collections) => {
     *   // Do something with the collections
     * });
     *
     * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the collections.
     */
    value: function fetchAll() {
      var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;

      return this.graphQLClient.send(query$7, { first: first }).then(defaultResolver('collections'));
    }

    /**
     * Fetches all collections on the shop, including products.
     *
     * @example
     * client.collection.fetchAllWithProducts().then((collections) => {
     *   // Do something with the collections
     * });
     *
     * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the collections.
     */

  }, {
    key: 'fetchAllWithProducts',
    value: function fetchAllWithProducts() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$first = _ref.first,
          first = _ref$first === undefined ? 20 : _ref$first,
          _ref$productsFirst = _ref.productsFirst,
          productsFirst = _ref$productsFirst === undefined ? 20 : _ref$productsFirst;

      return this.graphQLClient.send(query$8, { first: first, productsFirst: productsFirst }).then(defaultResolver('collections')).then(paginateCollectionsProductConnectionsAndResolve(this.graphQLClient));
    }

    /**
     * Fetches a single collection by ID on the shop, not including products.
     * To fetch the collection with products use [fetchWithProducts]{@link Client#fetchWithProducts}.
     *
     * @example
     * client.collection.fetch('Xk9lM2JkNzFmNzIQ4NTIY4ZDFiZTUyZTUwNTE2MDNhZjg==').then((collection) => {
     *   // Do something with the collection
     * });
     *
     * @param {String} id The id of the collection to fetch.
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the collection.
     */

  }, {
    key: 'fetch',
    value: function fetch(id) {
      return this.graphQLClient.send(query$5, { id: id }).then(defaultResolver('node'));
    }

    /**
     * Fetches a single collection by ID on the shop, including products.
     *
     * @example
     * client.collection.fetchWithProducts('Xk9lM2JkNzFmNzIQ4NTIY4ZDFiZTUyZTUwNTE2MDNhZjg==').then((collection) => {
     *   // Do something with the collection
     * });
     *
     * @param {String} id The id of the collection to fetch.
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the collection.
     */

  }, {
    key: 'fetchWithProducts',
    value: function fetchWithProducts(id) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$productsFirst = _ref2.productsFirst,
          productsFirst = _ref2$productsFirst === undefined ? 20 : _ref2$productsFirst;

      return this.graphQLClient.send(query$6, { id: id, productsFirst: productsFirst }).then(defaultResolver('node')).then(paginateCollectionsProductConnectionsAndResolve(this.graphQLClient));
    }

    /**
     * Fetches a collection by handle on the shop.
     *
     * @example
     * client.collection.fetchByHandle('my-collection').then((collection) => {
     *   // Do something with the collection
     * });
     *
     * @param {String} handle The handle of the collection to fetch.
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the collection.
     */

  }, {
    key: 'fetchByHandle',
    value: function fetchByHandle(handle) {
      return this.graphQLClient.send(query$9, { handle: handle }).then(defaultResolver('collectionByHandle'));
    }

    /**
     * Fetches all collections on the shop that match the query.
     *
     * @example
     * client.collection.fetchQuery({first: 20, sortKey: 'CREATED_AT', reverse: true}).then((collections) => {
     *   // Do something with the first 10 collections sorted by title in ascending order
     * });
     *
     * @param {Object} [args] An object specifying the query data containing zero or more of:
     *   @param {Int} [args.first=20] The relay `first` param. This specifies page size.
     *   @param {String} [args.sortKey=ID] The key to sort results by. Available values are
     *   documented as {@link https://help.shopify.com/api/storefront-api/reference/enum/collectionsortkeys|Collection Sort Keys}.
     *   @param {String} [args.query] A query string. See full documentation {@link https://help.shopify.com/api/storefront-api/reference/object/shop#collections|here}
     *   @param {Boolean} [args.reverse] Whether or not to reverse the sort order of the results
     * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the collections.
     */

  }, {
    key: 'fetchQuery',
    value: function fetchQuery() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$first = _ref3.first,
          first = _ref3$first === undefined ? 20 : _ref3$first,
          _ref3$sortKey = _ref3.sortKey,
          sortKey = _ref3$sortKey === undefined ? 'ID' : _ref3$sortKey,
          query = _ref3.query,
          reverse = _ref3.reverse;

      return this.graphQLClient.send(query$7, {
        first: first,
        sortKey: sortKey,
        query: query,
        reverse: reverse
      }).then(defaultResolver('collections'));
    }
  }]);
  return CollectionResource;
}(Resource);

function query$10(client) {
  var document = client.document();
  document.addQuery(function (root) {
    root.add("shop", function (shop) {
      shop.add("paymentSettings", function (paymentSettings) {
        paymentSettings.add("enabledPresentmentCurrencies");
      });
      shop.add("description");
      shop.add("moneyFormat");
      shop.add("name");
      shop.add("primaryDomain", function (primaryDomain) {
        primaryDomain.add("host");
        primaryDomain.add("sslEnabled");
        primaryDomain.add("url");
      });
    });
  }, client.internationalizationDirective);
  return document;
}

function query$11(client) {
  var document = client.document();
  var spreads = {};
  spreads.PolicyFragment = document.defineFragment("PolicyFragment", "ShopPolicy", function (root) {
    root.add("id");
    root.add("title");
    root.add("url");
    root.add("body");
  });
  document.addQuery(function (root) {
    root.add("shop", function (shop) {
      shop.add("privacyPolicy", function (privacyPolicy) {
        privacyPolicy.addFragment(spreads.PolicyFragment);
      });
      shop.add("termsOfService", function (termsOfService) {
        termsOfService.addFragment(spreads.PolicyFragment);
      });
      shop.add("refundPolicy", function (refundPolicy) {
        refundPolicy.addFragment(spreads.PolicyFragment);
      });
    });
  }, client.internationalizationDirective);
  return document;
}

function query$12(client) {
  var document = client.document();
  document.addQuery(function (root) {
    root.add("localization", function (localization) {
      localization.add("country", function (country) {
        country.add("currency", function (currency) {
          currency.add("isoCode");
          currency.add("name");
          currency.add("symbol");
        });
        country.add("isoCode");
        country.add("name");
        country.add("unitSystem");
      });
    });
  }, client.internationalizationDirective);
  return document;
}

// GraphQL
/**
 * The JS Buy SDK shop resource
 * @class
 */

var ShopResource = function (_Resource) {
  inherits$1(ShopResource, _Resource);

  function ShopResource() {
    classCallCheck$1(this, ShopResource);
    return possibleConstructorReturn$1(this, (ShopResource.__proto__ || Object.getPrototypeOf(ShopResource)).apply(this, arguments));
  }

  createClass$1(ShopResource, [{
    key: 'fetchInfo',


    /**
     * Fetches shop information (`currencyCode`, `description`, `moneyFormat`, `name`, and `primaryDomain`).
     * See the {@link https://help.shopify.com/api/storefront-api/reference/object/shop|Storefront API reference} for more information.
     *
     * @example
     * client.shop.fetchInfo().then((shop) => {
     *   // Do something with the shop
     * });
     *
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the shop.
     */
    value: function fetchInfo() {
      return this.graphQLClient.send(query$10).then(defaultResolver('shop'));
    }

    /**
     * Fetches shop policies (privacy policy, terms of service and refund policy).
     *
     * @example
     * client.shop.fetchPolicies().then((shop) => {
     *   // Do something with the shop
     * });
     *
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the shop.
     */

  }, {
    key: 'fetchPolicies',
    value: function fetchPolicies() {
      return this.graphQLClient.send(query$11).then(defaultResolver('shop'));
    }
  }, {
    key: 'fetchLocalization',
    value: function fetchLocalization() {
      return this.graphQLClient.send(query$12).then(defaultResolver('localization'));
    }
  }]);
  return ShopResource;
}(Resource);

function getDiscountAllocationId(discountAllocation) {
  var discountApp = discountAllocation.discountApplication;
  var discountId = discountAllocation.code || discountAllocation.title || discountApp.code || discountApp.title;

  if (!discountId) {
    throw new Error('Discount allocation must have either code or title in discountApplication: ' + JSON.stringify(discountAllocation));
  }

  return discountId;
}

function getDiscountApplicationId(discountApplication) {
  var discountId = discountApplication.code || discountApplication.title;

  if (!discountId) {
    throw new Error('Discount application must have either code or title: ' + JSON.stringify(discountApplication));
  }

  return discountId;
}

function convertToCheckoutDiscountApplicationType(cartLineItems, cartOrderLevelDiscountAllocations) {
  // For each discount allocation, move the code/title field to be inside the discountApplication field
  // This is because the code/title field is part of the discount allocation for a Cart, but part of
  // the discount application for a checkout
  for (var i = 0; i < cartLineItems.length; i++) {
    var discountAllocations = cartLineItems[i].discountAllocations;


    if (!discountAllocations) {
      continue;
    }

    for (var j = 0; j < discountAllocations.length; j++) {
      var allocation = discountAllocations[j];
      var newDiscountApplication = Object.assign({}, allocation.discountApplication || {}, allocation.code ? { code: allocation.code } : null, allocation.title ? { title: allocation.title } : null);

      var newAllocation = Object.assign({}, allocation);

      delete newAllocation.code;
      delete newAllocation.title;
      newAllocation.discountApplication = newDiscountApplication;

      discountAllocations[j] = newAllocation;
    }
  }

  for (var _i = 0; _i < cartOrderLevelDiscountAllocations.length; _i++) {
    var _allocation = cartOrderLevelDiscountAllocations[_i];
    var _newDiscountApplication = Object.assign({}, _allocation.discountApplication || {}, _allocation.code ? { code: _allocation.code } : null, _allocation.title ? { title: _allocation.title } : null);

    var _newAllocation = Object.assign({}, _allocation);

    delete _newAllocation.code;
    delete _newAllocation.title;
    _newAllocation.discountApplication = _newDiscountApplication;

    cartOrderLevelDiscountAllocations[_i] = _newAllocation;
  }
}

function groupOrderLevelDiscountAllocationsByDiscountId(cartDiscountAllocations) {
  return cartDiscountAllocations.reduce(function (acc, discountAllocation) {
    var id = getDiscountAllocationId(discountAllocation);

    acc.set(id, [].concat(toConsumableArray$1(acc.get(id) || []), [discountAllocation]));

    return acc;
  }, new Map());
}

function findLineIdForEachOrderLevelDiscountAllocation(cartLines, orderLevelDiscountAllocations) {
  if (!cartLines.length || !orderLevelDiscountAllocations.length) {
    return [];
  }

  if (orderLevelDiscountAllocations.length % cartLines.length !== 0) {
    throw new Error('Invalid number of order-level discount allocations. For each order-level discount, there must be 1 order-level discount allocation for each line item. \n      Number of line items: ' + cartLines.length + '. Number of discount allocations: ' + orderLevelDiscountAllocations.length);
  }

  // May have multiple order-level discount allocations for a given line item
  var discountIdToDiscountAllocationsMap = groupOrderLevelDiscountAllocationsByDiscountId(orderLevelDiscountAllocations);

  // Sort each array within the Map by discountedAmount so that the lowest discounted amount appears first
  discountIdToDiscountAllocationsMap.forEach(function (allocations) {
    allocations.sort(function (first, second) {
      return first.discountedAmount.amount - second.discountedAmount.amount;
    });
  });

  // Sort cart line items so that the item with the lowest cost (after line-level discounts) appears first
  var sortedCartLineItems = [].concat(toConsumableArray$1(cartLines)).sort(function (first, second) {
    return first.cost.totalAmount.amount - second.cost.totalAmount.amount;
  });

  // For each discount, the discount allocation with the smallest amount should be applied
  // to the item with the lowest cost (after line-level discounts)
  return Array.from(discountIdToDiscountAllocationsMap.values()).flatMap(function (allocations) {
    return sortedCartLineItems.map(function (lineItem, index) {
      return {
        id: lineItem.id,
        discountAllocation: {
          discountedAmount: allocations[index].discountedAmount,
          discountApplication: allocations[index].discountApplication
        }
      };
    });
  });
}

function discountMapper(_ref) {
  var cartLineItems = _ref.cartLineItems,
      cartDiscountAllocations = _ref.cartDiscountAllocations,
      cartDiscountCodes = _ref.cartDiscountCodes;

  var hasDiscountAllocations = false;

  for (var i = 0; i < cartLineItems.length; i++) {
    var discountAllocations = cartLineItems[i].discountAllocations;


    if (discountAllocations && discountAllocations.length) {
      hasDiscountAllocations = true;
      break;
    }
  }
  if (!hasDiscountAllocations && !cartDiscountAllocations.length) {
    return {
      discountApplications: [],
      cartLinesWithAllDiscountAllocations: cartLineItems
    };
  }

  convertToCheckoutDiscountApplicationType(cartLineItems, cartDiscountAllocations);

  var cartLinesWithAllDiscountAllocations = mergeCartOrderLevelDiscountAllocationsToCartLineDiscountAllocations({
    lineItems: cartLineItems,
    orderLevelDiscountAllocationsForLines: findLineIdForEachOrderLevelDiscountAllocation(cartLineItems, cartDiscountAllocations)
  });

  var discountIdToDiscountApplicationMap = generateDiscountApplications(cartLinesWithAllDiscountAllocations, cartDiscountCodes);

  cartDiscountCodes.forEach(function (_ref2) {
    var code = _ref2.code,
        codeIsApplied = _ref2.codeIsApplied;

    if (codeIsApplied && !discountIdToDiscountApplicationMap.has(code)) {
      throw new Error('Discount code ' + code + ' not found in discount application map. \n        Discount application map: ' + JSON.stringify(discountIdToDiscountApplicationMap));
    }
  });

  return {
    discountApplications: Array.from(discountIdToDiscountApplicationMap.values()),
    cartLinesWithAllDiscountAllocations: cartLinesWithAllDiscountAllocations
  };
}

function mergeCartOrderLevelDiscountAllocationsToCartLineDiscountAllocations(_ref3) {
  var lineItems = _ref3.lineItems,
      orderLevelDiscountAllocationsForLines = _ref3.orderLevelDiscountAllocationsForLines;

  return lineItems.map(function (line) {
    var lineItemId = line.id;
    // Could have multiple order-level discount allocations for a given line item
    var orderLevelDiscountAllocationsForLine = orderLevelDiscountAllocationsForLines.filter(function (_ref4) {
      var id = _ref4.id;
      return id === lineItemId;
    }).map(function (_ref5) {
      var discountAllocation = _ref5.discountAllocation;
      return {
        discountedAmount: discountAllocation.discountedAmount,
        discountApplication: discountAllocation.discountApplication
      };
    });

    var mergedDiscountAllocations = (line.discountAllocations || []).concat(orderLevelDiscountAllocationsForLine);
    var result = Object.assign({}, line, {
      discountAllocations: mergedDiscountAllocations
    });

    return result;
  });
}

function generateDiscountApplications(cartLinesWithAllDiscountAllocations, discountCodes) {
  var discountIdToDiscountApplicationMap = new Map();

  if (!cartLinesWithAllDiscountAllocations) {
    return discountIdToDiscountApplicationMap;
  }

  cartLinesWithAllDiscountAllocations.forEach(function (_ref6) {
    var discountAllocations = _ref6.discountAllocations;

    if (!discountAllocations) {
      return;
    }

    discountAllocations.forEach(function (discountAllocation) {
      var discountApp = discountAllocation.discountApplication;
      var discountId = getDiscountAllocationId(discountAllocation);

      if (!discountId) {
        throw new Error('Discount allocation must have either code or title in discountApplication: ' + JSON.stringify(discountAllocation));
      }

      if (discountIdToDiscountApplicationMap.has(discountId)) {
        var existingDiscountApplication = discountIdToDiscountApplicationMap.get(discountId);

        // if existingDiscountApplication.value is an amount rather than a percentage discount
        if (existingDiscountApplication.value && 'amount' in existingDiscountApplication.value) {
          existingDiscountApplication.value = {
            amount: (Number(existingDiscountApplication.value.amount) + Number(discountAllocation.discountedAmount.amount)).toFixed(2),
            currencyCode: existingDiscountApplication.value.currencyCode,
            type: existingDiscountApplication.value.type
          };
        }
      } else {
        var discountApplication = {
          __typename: 'DiscountApplication',
          targetSelection: discountApp.targetSelection,
          allocationMethod: discountApp.allocationMethod,
          targetType: discountApp.targetType,
          value: discountApp.value,
          hasNextPage: false,
          hasPreviousPage: false
        };

        if ('code' in discountAllocation.discountApplication) {
          var discountCode = discountCodes.find(function (_ref7) {
            var code = _ref7.code;
            return code === discountId;
          });

          if (!discountCode) {
            throw new Error('Discount code ' + discountId + ' not found in cart discount codes. Discount codes: ' + JSON.stringify(discountCodes));
          }
          discountApplication = Object.assign({}, discountApplication, {
            code: discountAllocation.discountApplication.code,
            applicable: discountCode.applicable,
            type: {
              fieldBaseTypes: {
                applicable: 'Boolean',
                code: 'String'
              },
              implementsNode: false,
              kind: 'OBJECT',
              name: 'DiscountApplication'
            }
          });
        } else {
          discountApplication = Object.assign({}, discountApplication, {
            title: discountAllocation.discountApplication.title,
            type: {
              fieldBaseTypes: {
                applicable: 'Boolean',
                title: 'String'
              },
              implementsNode: false,
              kind: 'OBJECT',
              name: 'DiscountApplication'
            }
          });
        }

        discountIdToDiscountApplicationMap.set(discountId, discountApplication);
      }
    });
  });

  return discountIdToDiscountApplicationMap;
}

function getVariantType() {
  return {
    name: 'ProductVariant',
    kind: 'OBJECT',
    fieldBaseTypes: {
      availableForSale: 'Boolean',
      compareAtPrice: 'MoneyV2',
      id: 'ID',
      image: 'Image',
      price: 'MoneyV2',
      product: 'Product',
      selectedOptions: 'SelectedOption',
      sku: 'String',
      title: 'String',
      unitPrice: 'MoneyV2',
      unitPriceMeasurement: 'UnitPriceMeasurement',
      weight: 'Float'
    },
    implementsNode: true
  };
}

function getLineItemType() {
  return {
    name: 'CheckoutLineItem',
    kind: 'OBJECT',
    fieldBaseTypes: {
      customAttributes: 'Attribute',
      discountAllocations: 'Object[]',
      id: 'ID',
      quantity: 'Int',
      title: 'String',
      variant: 'Merchandise'
    },
    implementsNode: true
  };
}

function getDiscountAllocationType() {
  return {
    fieldBaseTypes: {
      allocatedAmount: 'MoneyV2',
      discountApplication: 'DiscountApplication'
    },
    implementsNode: false,
    kind: 'OBJECT',
    name: 'DiscountAllocation'
  };
}

function mapVariant(merchandise) {
  // Copy all properties except 'product'
  var result = {};

  for (var key in merchandise) {
    if (merchandise.hasOwnProperty(key) && key !== 'product') {
      result[key] = merchandise[key];
    }
  }

  // The actual Cart merchandise and Checkout variant objects map cleanly to each other,
  // but the SDK wasn't fetching the title from the product object, so we need to remove it
  var productWithoutTitle = {};

  if (merchandise.product) {
    for (var _key in merchandise.product) {
      if (merchandise.product.hasOwnProperty(_key) && _key !== 'title') {
        productWithoutTitle[_key] = merchandise.product[_key];
      }
    }
  }

  // Add additional properties
  result.priceV2 = merchandise.price;
  result.compareAtPriceV2 = merchandise.compareAtPrice;
  result.product = productWithoutTitle;
  result.type = getVariantType();

  return result;
}

function mapDiscountAllocations(discountAllocations, discountApplications) {
  if (!discountAllocations) {
    return [];
  }

  var result = [];

  for (var i = 0; i < discountAllocations.length; i++) {
    var allocation = discountAllocations[i];
    var application = null;

    for (var j = 0; j < discountApplications.length; j++) {
      if (getDiscountAllocationId(allocation) === getDiscountApplicationId(discountApplications[j])) {
        application = discountApplications[j];
        break;
      }
    }

    if (!application) {
      throw new Error('Missing discount application for allocation: ' + JSON.stringify(allocation));
    }

    var discountApp = Object.assign({}, application);

    result.push({
      allocatedAmount: allocation.discountedAmount,
      discountApplication: discountApp,
      type: getDiscountAllocationType()
    });
  }

  return result;
}

function mapLineItems(lines, discountApplications) {
  if (!lines || !Array.isArray(lines)) {
    return [];
  }

  var result = [];

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];

    if (!line || !line.merchandise || !line.merchandise.product) {
      continue;
    }

    var variant = mapVariant(line.merchandise);

    result.push({
      customAttributes: line.attributes,
      discountAllocations: mapDiscountAllocations(line.discountAllocations || [], discountApplications),
      id: line.id,
      quantity: line.quantity,
      title: line.merchandise.product.title,
      variant: variant,
      hasNextPage: false,
      hasPreviousPage: false,
      variableValues: line.variableValues,
      type: getLineItemType()
    });
  }

  return result;
}

function mapDiscountsAndLines(cart) {
  if (!cart) {
    return { discountApplications: [], cartLinesWithDiscounts: [] };
  }

  var result = discountMapper({
    cartLineItems: cart.lines || [],
    cartDiscountAllocations: cart.discountAllocations || [],
    cartDiscountCodes: cart.discountCodes || []
  });

  var mappedLines = mapLineItems(result.cartLinesWithAllDiscountAllocations || [], result.discountApplications || []);

  return {
    discountApplications: result.discountApplications || [],
    cartLinesWithDiscounts: mappedLines
  };
}

// NOTE: fields such as availableShippingRates are not included because they are not queried by the JS Buy SDK
var UNSUPPORTED_FIELDS = {
  completedAt: null,
  order: null,
  orderStatusUrl: null,
  ready: false,
  requiresShipping: true,
  shippingLine: null,
  taxExempt: false,
  taxesIncluded: false
};

function mapCartPayload(cart) {
  if (!cart) {
    return null;
  }

  var result = mapDiscountsAndLines(cart);
  var discountApplications = result.discountApplications;
  var cartLinesWithDiscounts = result.cartLinesWithDiscounts;

  var buyerIdentity = {
    countryCode: cart.buyerIdentity && cart.buyerIdentity.countryCode
  };

  var email = null;

  if (cart.buyerIdentity && cart.buyerIdentity.email) {
    email = cart.buyerIdentity.email;
  }

  var shippingAddress = null;

  if (cart.buyerIdentity && cart.buyerIdentity.deliveryAddressPreferences && cart.buyerIdentity.deliveryAddressPreferences.length) {
    shippingAddress = cart.buyerIdentity.deliveryAddressPreferences[0];
  }

  var currencyCode = null;
  var totalAmount = null;
  var totalTaxAmount = null;
  var totalDutyAmount = null;
  var checkoutChargeAmount = null;

  if (cart.cost) {
    if (cart.cost.totalAmount) {
      currencyCode = cart.cost.totalAmount.currencyCode;
      totalAmount = cart.cost.totalAmount;
    }
    if (cart.cost.totalTaxAmount) {
      totalTaxAmount = cart.cost.totalTaxAmount;
    }
    if (cart.cost.totalDutyAmount) {
      totalDutyAmount = cart.cost.totalDutyAmount;
    }
    if (cart.cost.checkoutChargeAmount) {
      checkoutChargeAmount = cart.cost.checkoutChargeAmount;
    }
  }

  var appliedGiftCards = cart.appliedGiftCards || [];
  var totalPrice = null;

  // This field will be defined in the API, but we're making it "optional" here so that our
  // unit tests for other fields work while only passing in the relevant fields
  if (totalAmount) {
    totalPrice = calculateTotalPrice(cart, totalAmount);
  }

  var subtotalPrice = null;

  // This field will be defined in the API, but we're making it "optional" here so that our
  // unit tests for other fields work while only passing in the relevant fields
  if (totalPrice) {
    subtotalPrice = calculateSubtotalPrice(totalPrice, totalDutyAmount, totalTaxAmount);
  }

  var checkoutPayload = Object.assign({
    appliedGiftCards: appliedGiftCards,
    buyerIdentity: buyerIdentity,
    createdAt: cart.createdAt,
    currencyCode: currencyCode,
    customAttributes: cart.attributes,
    discountApplications: discountApplications,
    email: email,
    id: cart.id,
    lineItems: cartLinesWithDiscounts,
    lineItemsSubtotalPrice: checkoutChargeAmount,
    note: cart.note,
    paymentDue: totalAmount,
    paymentDueV2: totalAmount,
    shippingAddress: shippingAddress,
    subtotalPrice: subtotalPrice,
    subtotalPriceV2: subtotalPrice,
    totalPrice: totalPrice,
    totalPriceV2: totalPrice,
    totalTax: totalTaxAmount || getDefaultMoneyObject(currencyCode, totalAmount),
    totalTaxV2: totalTaxAmount || getDefaultMoneyObject(currencyCode, totalAmount),
    updatedAt: cart.updatedAt,
    webUrl: cart.checkoutUrl
  }, UNSUPPORTED_FIELDS);

  normalizeCartMoneyFieldDecimalPlaces(checkoutPayload);

  return checkoutPayload;
}

/**
 *
 * @description Normalize all currency fields in the checkout payload to contain
 * the same number of decimal places that would be returned by the storefront API.
 *
 * In the storefront API, currency amounts are returned as a string that contains
 * 1 decimal place (if the 2nd decimal place is 0) or else 2 decimal places.
 *
 * In our mapping functions, we are typically converting to strings with 2 decimal
 * places. In case any clients of the JS Buy SDK are relying only a single decimal
 * place being returned in some cases, we want to normalize the decimal places.
 */
function normalizeCartMoneyFieldDecimalPlaces(checkout) {
  // The fields that we have mapped the currency for (that we therefore need to normalize)
  // are: discountApplication amounts, subtotalPrice, and totalPrice.

  if (checkout.discountApplications) {
    for (var i = 0; i < checkout.discountApplications.length; i++) {
      if (typeof checkout.discountApplications[i].value.percentage !== 'undefined') {
        continue;
      }

      var discountApplicationAmount = checkout.discountApplications[i].value.amount.toString();

      if (!shouldReturnWithOneDecimalPlace(discountApplicationAmount)) {
        continue;
      }

      checkout.discountApplications[i].value.amount = convertToOneDecimalPlace(discountApplicationAmount);
    }
  }

  if (checkout.lineItems) {
    for (var _i = 0; _i < checkout.lineItems.length; _i++) {
      for (var j = 0; j < checkout.lineItems[_i].discountAllocations.length; j++) {
        var discountApplication = checkout.lineItems[_i].discountAllocations[j].discountApplication;

        if (typeof discountApplication.value.percentage !== 'undefined') {
          continue;
        }

        var _discountApplicationAmount = discountApplication.value.amount.toString();

        if (!shouldReturnWithOneDecimalPlace(_discountApplicationAmount)) {
          continue;
        }

        discountApplication.value.amount = convertToOneDecimalPlace(_discountApplicationAmount);
      }
    }
  }

  if (checkout.subtotalPrice) {
    if (shouldReturnWithOneDecimalPlace(checkout.subtotalPrice.amount)) {
      checkout.subtotalPrice.amount = convertToOneDecimalPlace(checkout.subtotalPrice.amount);
      checkout.subtotalPriceV2.amount = convertToOneDecimalPlace(checkout.subtotalPriceV2.amount);
    }
  }

  if (checkout.totalPrice) {
    if (shouldReturnWithOneDecimalPlace(checkout.totalPrice.amount)) {
      checkout.totalPrice.amount = convertToOneDecimalPlace(checkout.totalPrice.amount);
      checkout.totalPriceV2.amount = convertToOneDecimalPlace(checkout.totalPriceV2.amount);
    }
  }
}

/**
 * @description Whether the SF API would return this amount with 1 decimal place
 * (as opposed to 2 decimal places). See normalizeCartMoneyFieldDecimalPlaces
 * for more information.
 * @param {string} currency field to check
 * @returns {boolean} whether the SF API would return this amount with 1 decimal place
 */
function shouldReturnWithOneDecimalPlace(amount) {
  if (!amount || !amount.toString().includes('.')) {
    return false;
  }

  var currencyDecimals = amount.toString().split('.')[1];

  if (currencyDecimals.length === 2 && currencyDecimals[1] === '0') {
    return true;
  }

  return false;
}

function convertToOneDecimalPlace(stringAmount) {
  return parseFloat(stringAmount).toFixed(1);
}

function getDefaultMoneyObject(currencyCode, totalAmount) {
  return {
    amount: '0.0',
    currencyCode: currencyCode,
    type: totalAmount && totalAmount.type
  };
}

function calculateTotalPrice(cart, totalAmount) {
  if (!cart.appliedGiftCards || !cart.appliedGiftCards.length) {
    return totalAmount;
  }

  // Assuming cart's totalAmount will have the same currency code as gift cards' presentmentAmountUsed
  var giftCardTotal = 0;

  for (var i = 0; i < cart.appliedGiftCards.length; i++) {
    giftCardTotal += parseFloat(cart.appliedGiftCards[i].presentmentAmountUsed.amount);
  }

  return {
    amount: (parseFloat(totalAmount.amount) + giftCardTotal).toFixed(2),
    currencyCode: totalAmount.currencyCode,
    type: totalAmount.type
  };
}

function calculateSubtotalPrice(totalPrice, totalDutyAmount, totalTaxAmount) {
  var dutyAmount = totalDutyAmount ? totalDutyAmount.amount : 0;
  var taxAmount = totalTaxAmount ? totalTaxAmount.amount : 0;

  return {
    amount: (parseFloat(totalPrice.amount) - parseFloat(dutyAmount) - parseFloat(taxAmount)).toFixed(2),
    currencyCode: totalPrice.currencyCode,
    type: totalPrice.type
  };
}

var CartErrorCodeToCheckoutErrorCode = {
  ADDRESS_FIELD_CONTAINS_EMOJIS: 'NOT_SUPPORTED',
  ADDRESS_FIELD_CONTAINS_HTML_TAGS: 'NOT_SUPPORTED',
  ADDRESS_FIELD_CONTAINS_URL: 'NOT_SUPPORTED',
  ADDRESS_FIELD_DOES_NOT_MATCH_EXPECTED_PATTERN: 'NOT_SUPPORTED',
  ADDRESS_FIELD_IS_REQUIRED: 'PRESENT',
  ADDRESS_FIELD_IS_TOO_LONG: 'TOO_LONG',
  INVALID: 'INVALID',
  INVALID_COMPANY_LOCATION: 'INVALID',
  INVALID_DELIVERY_GROUP: 'INVALID',
  INVALID_DELIVERY_OPTION: 'INVALID',
  INVALID_INCREMENT: 'INVALID',
  INVALID_MERCHANDISE_LINE: 'LINE_ITEM_NOT_FOUND',
  INVALID_METAFIELDS: 'INVALID',
  INVALID_PAYMENT: 'INVALID',
  INVALID_PAYMENT_EMPTY_CART: 'INVALID',
  INVALID_ZIP_CODE_FOR_COUNTRY: 'INVALID_FOR_COUNTRY',
  INVALID_ZIP_CODE_FOR_PROVINCE: 'INVALID_FOR_COUNTRY_AND_PROVINCE',
  LESS_THAN: 'LESS_THAN',
  MAXIMUM_EXCEEDED: 'NOT_ENOUGH_IN_STOCK',
  MINIMUM_NOT_MET: 'GREATER_THAN_OR_EQUAL_TO',
  MISSING_CUSTOMER_ACCESS_TOKEN: 'PRESENT',
  MISSING_DISCOUNT_CODE: 'PRESENT',
  MISSING_NOTE: 'PRESENT',
  NOTE_TOO_LONG: 'TOO_LONG',
  PAYMENT_METHOD_NOT_SUPPORTED: 'NOT_SUPPORTED',
  PROVINCE_NOT_FOUND: 'INVALID_PROVINCE_IN_COUNTRY',
  UNSPECIFIED_ADDRESS_ERROR: 'INVALID',
  VALIDATION_CUSTOM: 'INVALID',
  ZIP_CODE_NOT_SUPPORTED: 'NOT_SUPPORTED'
};

var CartWarningCodeToCheckoutErrorCode = {
  MERCHANDISE_NOT_ENOUGH_STOCK: 'NOT_ENOUGH_IN_STOCK',
  MERCHANDISE_OUT_OF_STOCK: 'NOT_ENOUGH_IN_STOCK',
  PAYMENTS_GIFT_CARDS_UNAVAILABLE: 'NOT_SUPPORTED'
};

function userErrorsMapper(userErrors) {
  return userErrors.map(function (_ref) {
    var code = _ref.code,
        field = _ref.field,
        message = _ref.message;
    return {
      // eslint-disable-next-line no-undefined
      code: code ? CartErrorCodeToCheckoutErrorCode[code] : undefined,
      field: field,
      message: message
    };
  });
}

function warningsMapper(warnings) {
  return warnings.map(function (_ref2) {
    var code = _ref2.code,
        message = _ref2.message;
    return {
      // eslint-disable-next-line no-undefined
      code: code ? CartWarningCodeToCheckoutErrorCode[code] : undefined,
      message: message
    };
  });
}

function checkoutUserErrorsMapper(userErrors, warnings) {
  var hasUserErrors = userErrors && userErrors.length;
  var hasWarnings = warnings && warnings.length;

  if (!hasUserErrors && !hasWarnings) {
    return [];
  }

  var checkoutUserErrors = hasUserErrors ? userErrorsMapper(userErrors) : [];
  var checkoutWarnings = hasWarnings ? warningsMapper(warnings) : [];

  return [].concat(toConsumableArray$1(checkoutUserErrors), toConsumableArray$1(checkoutWarnings));
}

function handleCartMutation(mutationRootKey, client) {
  return function (_ref) {
    var _ref$data = _ref.data,
        data = _ref$data === undefined ? {} : _ref$data,
        errors = _ref.errors,
        _ref$model = _ref.model,
        model = _ref$model === undefined ? {} : _ref$model;

    var rootData = data[mutationRootKey];
    var rootModel = model[mutationRootKey];

    if (rootData && rootData.cart) {
      return client.fetchAllPages(rootModel.cart.lines, { pageSize: 250 }).then(function (lines) {
        rootModel.cart.attrs.lines = lines;
        var checkoutUserErrors = checkoutUserErrorsMapper(rootData.userErrors, rootData.warnings);

        try {
          return Object.assign({}, mapCartPayload(rootModel.cart, mutationRootKey), { userErrors: checkoutUserErrors, errors: rootModel.cart.errors });
        } catch (error) {
          return Promise.reject(error);
        }
      });
    }

    if (errors && errors.length) {
      return Promise.reject(new Error(JSON.stringify(errors)));
    }

    if (rootData && (rootData.userErrors.length || rootData.warnings.length)) {
      var checkoutUserErrors = checkoutUserErrorsMapper(rootData.userErrors, rootData.warnings);

      return Promise.reject(checkoutUserErrors);
    }

    return Promise.reject(new Error('The ' + mutationRootKey + ' mutation failed due to an unknown error.'));
  };
}

function query$13(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.Cart = {};
  variables.Cart.id = client.variable("id", "ID!");
  spreads.CartLineFragment = document.defineFragment("CartLineFragment", "BaseCartLine", function (root) {
    root.add("id");
    root.add("merchandise", function (merchandise) {
      merchandise.addInlineFragmentOn("ProductVariant", function (ProductVariant) {
        ProductVariant.add("id");
        ProductVariant.add("title");
        ProductVariant.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        ProductVariant.add("product", function (product) {
          product.add("id");
          product.add("handle");
          product.add("title");
        });
        ProductVariant.add("weight");
        ProductVariant.add("availableForSale", {
          alias: "available"
        });
        ProductVariant.add("sku");
        ProductVariant.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        ProductVariant.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        ProductVariant.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        ProductVariant.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        ProductVariant.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
    });
    root.add("quantity");
    root.add("attributes", function (attributes) {
      attributes.add("key");
      attributes.add("value");
    });
    root.add("cost", function (cost) {
      cost.add("totalAmount", function (totalAmount) {
        totalAmount.add("amount");
        totalAmount.add("currencyCode");
      });
      cost.add("subtotalAmount", function (subtotalAmount) {
        subtotalAmount.add("amount");
        subtotalAmount.add("currencyCode");
      });
      cost.add("amountPerQuantity", function (amountPerQuantity) {
        amountPerQuantity.add("amount");
        amountPerQuantity.add("currencyCode");
      });
      cost.add("compareAtAmountPerQuantity", function (compareAtAmountPerQuantity) {
        compareAtAmountPerQuantity.add("amount");
        compareAtAmountPerQuantity.add("currencyCode");
      });
    });
    root.add("discountAllocations", function (discountAllocations) {
      discountAllocations.add("discountedAmount", function (discountedAmount) {
        discountedAmount.add("amount");
        discountedAmount.add("currencyCode");
      });
      discountAllocations.add("discountApplication", function (discountApplication) {
        discountApplication.add("targetType");
        discountApplication.add("allocationMethod");
        discountApplication.add("targetSelection");
        discountApplication.add("value", function (value) {
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
        });
      });
      discountAllocations.addInlineFragmentOn("CartCodeDiscountAllocation", function (CartCodeDiscountAllocation) {
        CartCodeDiscountAllocation.add("code");
      });
      discountAllocations.addInlineFragmentOn("CartAutomaticDiscountAllocation", function (CartAutomaticDiscountAllocation) {
        CartAutomaticDiscountAllocation.add("title");
      });
      discountAllocations.addInlineFragmentOn("CartCustomDiscountAllocation", function (CartCustomDiscountAllocation) {
        CartCustomDiscountAllocation.add("title");
      });
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsed", function (amountUsed) {
      amountUsed.add("amount");
      amountUsed.add("currencyCode");
    });
    root.add("amountUsed", {
      alias: "amountUsedV2"
    }, function (amountUsed) {
      amountUsed.add("amount");
      amountUsed.add("currencyCode");
    });
    root.add("balance", function (balance) {
      balance.add("amount");
      balance.add("currencyCode");
    });
    root.add("balance", {
      alias: "balanceV2"
    }, function (balance) {
      balance.add("amount");
      balance.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.CartFragment = document.defineFragment("CartFragment", "Cart", function (root) {
    root.add("id");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("lines", {
      args: {
        first: 250
      }
    }, function (lines) {
      lines.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lines.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.CartLineFragment);
        });
      });
    });
    root.add("attributes", function (attributes) {
      attributes.add("key");
      attributes.add("value");
    });
    root.add("cost", function (cost) {
      cost.add("checkoutChargeAmount", function (checkoutChargeAmount) {
        checkoutChargeAmount.add("amount");
        checkoutChargeAmount.add("currencyCode");
      });
      cost.add("totalAmount", function (totalAmount) {
        totalAmount.add("amount");
        totalAmount.add("currencyCode");
      });
      cost.add("subtotalAmount", function (subtotalAmount) {
        subtotalAmount.add("amount");
        subtotalAmount.add("currencyCode");
      });
      cost.add("totalTaxAmount", function (totalTaxAmount) {
        totalTaxAmount.add("amount");
        totalTaxAmount.add("currencyCode");
      });
      cost.add("totalDutyAmount", function (totalDutyAmount) {
        totalDutyAmount.add("amount");
        totalDutyAmount.add("currencyCode");
      });
    });
    root.add("checkoutUrl");
    root.add("discountCodes", function (discountCodes) {
      discountCodes.add("applicable");
      discountCodes.add("code");
    });
    root.add("discountAllocations", function (discountAllocations) {
      discountAllocations.add("discountedAmount", function (discountedAmount) {
        discountedAmount.add("amount");
        discountedAmount.add("currencyCode");
      });
      discountAllocations.add("discountApplication", function (discountApplication) {
        discountApplication.add("targetType");
        discountApplication.add("allocationMethod");
        discountApplication.add("targetSelection");
        discountApplication.add("value", function (value) {
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
        });
      });
      discountAllocations.addInlineFragmentOn("CartCodeDiscountAllocation", function (CartCodeDiscountAllocation) {
        CartCodeDiscountAllocation.add("code");
      });
      discountAllocations.addInlineFragmentOn("CartAutomaticDiscountAllocation", function (CartAutomaticDiscountAllocation) {
        CartAutomaticDiscountAllocation.add("title");
      });
      discountAllocations.addInlineFragmentOn("CartCustomDiscountAllocation", function (CartCustomDiscountAllocation) {
        CartCustomDiscountAllocation.add("title");
      });
    });
    root.add("buyerIdentity", function (buyerIdentity) {
      buyerIdentity.add("countryCode");
      buyerIdentity.add("preferences", function (preferences) {
        preferences.add("delivery", function (delivery) {
          delivery.add("coordinates", function (coordinates) {
            coordinates.add("latitude");
            coordinates.add("longitude");
            coordinates.add("countryCode");
          });
          delivery.add("deliveryMethod");
          delivery.add("pickupHandle");
        });
        preferences.add("wallet");
      });
      buyerIdentity.add("email");
      buyerIdentity.add("phone");
      buyerIdentity.add("customer", function (customer) {
        customer.add("email");
      });
      buyerIdentity.add("deliveryAddressPreferences", function (deliveryAddressPreferences) {
        deliveryAddressPreferences.addInlineFragmentOn("MailingAddress", function (MailingAddress) {
          MailingAddress.add("address1");
          MailingAddress.add("address2");
          MailingAddress.add("city");
          MailingAddress.add("company");
          MailingAddress.add("country");
          MailingAddress.add("countryCodeV2");
          MailingAddress.add("firstName");
          MailingAddress.add("formatted");
          MailingAddress.add("formattedArea");
          MailingAddress.add("lastName");
          MailingAddress.add("latitude");
          MailingAddress.add("longitude");
          MailingAddress.add("name");
          MailingAddress.add("phone");
          MailingAddress.add("province");
          MailingAddress.add("provinceCode");
          MailingAddress.add("zip");
        });
      });
    });
    root.add("deliveryGroups", {
      args: {
        first: 10
      }
    }, function (deliveryGroups) {
      deliveryGroups.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      deliveryGroups.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("id");
          node.add("deliveryAddress", function (deliveryAddress) {
            deliveryAddress.add("address2");
            deliveryAddress.add("address1");
            deliveryAddress.add("city");
            deliveryAddress.add("company");
            deliveryAddress.add("country");
            deliveryAddress.add("countryCodeV2");
            deliveryAddress.add("firstName");
            deliveryAddress.add("formatted");
            deliveryAddress.add("formattedArea");
            deliveryAddress.add("lastName");
            deliveryAddress.add("latitude");
            deliveryAddress.add("longitude");
            deliveryAddress.add("name");
            deliveryAddress.add("phone");
            deliveryAddress.add("province");
            deliveryAddress.add("provinceCode");
          });
          node.add("deliveryOptions", function (deliveryOptions) {
            deliveryOptions.add("code");
            deliveryOptions.add("deliveryMethodType");
            deliveryOptions.add("description");
            deliveryOptions.add("estimatedCost", function (estimatedCost) {
              estimatedCost.add("amount");
              estimatedCost.add("currencyCode");
            });
            deliveryOptions.add("handle");
            deliveryOptions.add("title");
          });
          node.add("selectedDeliveryOption", function (selectedDeliveryOption) {
            selectedDeliveryOption.add("code");
            selectedDeliveryOption.add("deliveryMethodType");
            selectedDeliveryOption.add("description");
            selectedDeliveryOption.add("estimatedCost", function (estimatedCost) {
              estimatedCost.add("amount");
              estimatedCost.add("currencyCode");
            });
            selectedDeliveryOption.add("handle");
            selectedDeliveryOption.add("title");
          });
          node.add("cartLines", {
            args: {
              first: 250
            }
          }, function (cartLines) {
            cartLines.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            cartLines.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("id");
              });
            });
          });
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("note");
  });
  document.addQuery("Cart", [variables.Cart.id], function (root) {
    root.add("cart", {
      args: {
        id: variables.Cart.id
      }
    }, function (cart) {
      cart.addFragment(spreads.CartFragment);
    });
  }, client.internationalizationDirective);
  return document;
}

function query$14(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.CartCreate = {};
  variables.CartCreate.input = client.variable("input", "CartInput!");
  spreads.CartLineFragment = document.defineFragment("CartLineFragment", "BaseCartLine", function (root) {
    root.add("id");
    root.add("merchandise", function (merchandise) {
      merchandise.addInlineFragmentOn("ProductVariant", function (ProductVariant) {
        ProductVariant.add("id");
        ProductVariant.add("title");
        ProductVariant.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        ProductVariant.add("product", function (product) {
          product.add("id");
          product.add("handle");
          product.add("title");
        });
        ProductVariant.add("weight");
        ProductVariant.add("availableForSale", {
          alias: "available"
        });
        ProductVariant.add("sku");
        ProductVariant.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        ProductVariant.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        ProductVariant.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        ProductVariant.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        ProductVariant.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
    });
    root.add("quantity");
    root.add("attributes", function (attributes) {
      attributes.add("key");
      attributes.add("value");
    });
    root.add("cost", function (cost) {
      cost.add("totalAmount", function (totalAmount) {
        totalAmount.add("amount");
        totalAmount.add("currencyCode");
      });
      cost.add("subtotalAmount", function (subtotalAmount) {
        subtotalAmount.add("amount");
        subtotalAmount.add("currencyCode");
      });
      cost.add("amountPerQuantity", function (amountPerQuantity) {
        amountPerQuantity.add("amount");
        amountPerQuantity.add("currencyCode");
      });
      cost.add("compareAtAmountPerQuantity", function (compareAtAmountPerQuantity) {
        compareAtAmountPerQuantity.add("amount");
        compareAtAmountPerQuantity.add("currencyCode");
      });
    });
    root.add("discountAllocations", function (discountAllocations) {
      discountAllocations.add("discountedAmount", function (discountedAmount) {
        discountedAmount.add("amount");
        discountedAmount.add("currencyCode");
      });
      discountAllocations.add("discountApplication", function (discountApplication) {
        discountApplication.add("targetType");
        discountApplication.add("allocationMethod");
        discountApplication.add("targetSelection");
        discountApplication.add("value", function (value) {
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
        });
      });
      discountAllocations.addInlineFragmentOn("CartCodeDiscountAllocation", function (CartCodeDiscountAllocation) {
        CartCodeDiscountAllocation.add("code");
      });
      discountAllocations.addInlineFragmentOn("CartAutomaticDiscountAllocation", function (CartAutomaticDiscountAllocation) {
        CartAutomaticDiscountAllocation.add("title");
      });
      discountAllocations.addInlineFragmentOn("CartCustomDiscountAllocation", function (CartCustomDiscountAllocation) {
        CartCustomDiscountAllocation.add("title");
      });
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsed", function (amountUsed) {
      amountUsed.add("amount");
      amountUsed.add("currencyCode");
    });
    root.add("amountUsed", {
      alias: "amountUsedV2"
    }, function (amountUsed) {
      amountUsed.add("amount");
      amountUsed.add("currencyCode");
    });
    root.add("balance", function (balance) {
      balance.add("amount");
      balance.add("currencyCode");
    });
    root.add("balance", {
      alias: "balanceV2"
    }, function (balance) {
      balance.add("amount");
      balance.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.CartFragment = document.defineFragment("CartFragment", "Cart", function (root) {
    root.add("id");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("lines", {
      args: {
        first: 250
      }
    }, function (lines) {
      lines.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lines.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.CartLineFragment);
        });
      });
    });
    root.add("attributes", function (attributes) {
      attributes.add("key");
      attributes.add("value");
    });
    root.add("cost", function (cost) {
      cost.add("checkoutChargeAmount", function (checkoutChargeAmount) {
        checkoutChargeAmount.add("amount");
        checkoutChargeAmount.add("currencyCode");
      });
      cost.add("totalAmount", function (totalAmount) {
        totalAmount.add("amount");
        totalAmount.add("currencyCode");
      });
      cost.add("subtotalAmount", function (subtotalAmount) {
        subtotalAmount.add("amount");
        subtotalAmount.add("currencyCode");
      });
      cost.add("totalTaxAmount", function (totalTaxAmount) {
        totalTaxAmount.add("amount");
        totalTaxAmount.add("currencyCode");
      });
      cost.add("totalDutyAmount", function (totalDutyAmount) {
        totalDutyAmount.add("amount");
        totalDutyAmount.add("currencyCode");
      });
    });
    root.add("checkoutUrl");
    root.add("discountCodes", function (discountCodes) {
      discountCodes.add("applicable");
      discountCodes.add("code");
    });
    root.add("discountAllocations", function (discountAllocations) {
      discountAllocations.add("discountedAmount", function (discountedAmount) {
        discountedAmount.add("amount");
        discountedAmount.add("currencyCode");
      });
      discountAllocations.add("discountApplication", function (discountApplication) {
        discountApplication.add("targetType");
        discountApplication.add("allocationMethod");
        discountApplication.add("targetSelection");
        discountApplication.add("value", function (value) {
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
        });
      });
      discountAllocations.addInlineFragmentOn("CartCodeDiscountAllocation", function (CartCodeDiscountAllocation) {
        CartCodeDiscountAllocation.add("code");
      });
      discountAllocations.addInlineFragmentOn("CartAutomaticDiscountAllocation", function (CartAutomaticDiscountAllocation) {
        CartAutomaticDiscountAllocation.add("title");
      });
      discountAllocations.addInlineFragmentOn("CartCustomDiscountAllocation", function (CartCustomDiscountAllocation) {
        CartCustomDiscountAllocation.add("title");
      });
    });
    root.add("buyerIdentity", function (buyerIdentity) {
      buyerIdentity.add("countryCode");
      buyerIdentity.add("preferences", function (preferences) {
        preferences.add("delivery", function (delivery) {
          delivery.add("coordinates", function (coordinates) {
            coordinates.add("latitude");
            coordinates.add("longitude");
            coordinates.add("countryCode");
          });
          delivery.add("deliveryMethod");
          delivery.add("pickupHandle");
        });
        preferences.add("wallet");
      });
      buyerIdentity.add("email");
      buyerIdentity.add("phone");
      buyerIdentity.add("customer", function (customer) {
        customer.add("email");
      });
      buyerIdentity.add("deliveryAddressPreferences", function (deliveryAddressPreferences) {
        deliveryAddressPreferences.addInlineFragmentOn("MailingAddress", function (MailingAddress) {
          MailingAddress.add("address1");
          MailingAddress.add("address2");
          MailingAddress.add("city");
          MailingAddress.add("company");
          MailingAddress.add("country");
          MailingAddress.add("countryCodeV2");
          MailingAddress.add("firstName");
          MailingAddress.add("formatted");
          MailingAddress.add("formattedArea");
          MailingAddress.add("lastName");
          MailingAddress.add("latitude");
          MailingAddress.add("longitude");
          MailingAddress.add("name");
          MailingAddress.add("phone");
          MailingAddress.add("province");
          MailingAddress.add("provinceCode");
          MailingAddress.add("zip");
        });
      });
    });
    root.add("deliveryGroups", {
      args: {
        first: 10
      }
    }, function (deliveryGroups) {
      deliveryGroups.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      deliveryGroups.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("id");
          node.add("deliveryAddress", function (deliveryAddress) {
            deliveryAddress.add("address2");
            deliveryAddress.add("address1");
            deliveryAddress.add("city");
            deliveryAddress.add("company");
            deliveryAddress.add("country");
            deliveryAddress.add("countryCodeV2");
            deliveryAddress.add("firstName");
            deliveryAddress.add("formatted");
            deliveryAddress.add("formattedArea");
            deliveryAddress.add("lastName");
            deliveryAddress.add("latitude");
            deliveryAddress.add("longitude");
            deliveryAddress.add("name");
            deliveryAddress.add("phone");
            deliveryAddress.add("province");
            deliveryAddress.add("provinceCode");
          });
          node.add("deliveryOptions", function (deliveryOptions) {
            deliveryOptions.add("code");
            deliveryOptions.add("deliveryMethodType");
            deliveryOptions.add("description");
            deliveryOptions.add("estimatedCost", function (estimatedCost) {
              estimatedCost.add("amount");
              estimatedCost.add("currencyCode");
            });
            deliveryOptions.add("handle");
            deliveryOptions.add("title");
          });
          node.add("selectedDeliveryOption", function (selectedDeliveryOption) {
            selectedDeliveryOption.add("code");
            selectedDeliveryOption.add("deliveryMethodType");
            selectedDeliveryOption.add("description");
            selectedDeliveryOption.add("estimatedCost", function (estimatedCost) {
              estimatedCost.add("amount");
              estimatedCost.add("currencyCode");
            });
            selectedDeliveryOption.add("handle");
            selectedDeliveryOption.add("title");
          });
          node.add("cartLines", {
            args: {
              first: 250
            }
          }, function (cartLines) {
            cartLines.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            cartLines.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("id");
              });
            });
          });
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("note");
  });
  spreads.CartUserErrorFragment = document.defineFragment("CartUserErrorFragment", "CartUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.CartWarningFragment = document.defineFragment("CartWarningFragment", "CartWarning", function (root) {
    root.add("code");
    root.add("message");
  });
  document.addMutation("CartCreate", [variables.CartCreate.input], function (root) {
    root.add("cartCreate", {
      args: {
        input: variables.CartCreate.input
      }
    }, function (cartCreate) {
      cartCreate.add("cart", function (cart) {
        cart.addFragment(spreads.CartFragment);
      });
      cartCreate.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.CartUserErrorFragment);
      });
      cartCreate.add("warnings", function (warnings) {
        warnings.addFragment(spreads.CartWarningFragment);
      });
    });
  }, client.internationalizationDirective);
  return document;
}

function query$15(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.CartAttributesUpdate = {};
  variables.CartAttributesUpdate.attributes = client.variable("attributes", "[AttributeInput!]!");
  variables.CartAttributesUpdate.cartId = client.variable("cartId", "ID!");
  spreads.CartLineFragment = document.defineFragment("CartLineFragment", "BaseCartLine", function (root) {
    root.add("id");
    root.add("merchandise", function (merchandise) {
      merchandise.addInlineFragmentOn("ProductVariant", function (ProductVariant) {
        ProductVariant.add("id");
        ProductVariant.add("title");
        ProductVariant.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        ProductVariant.add("product", function (product) {
          product.add("id");
          product.add("handle");
          product.add("title");
        });
        ProductVariant.add("weight");
        ProductVariant.add("availableForSale", {
          alias: "available"
        });
        ProductVariant.add("sku");
        ProductVariant.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        ProductVariant.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        ProductVariant.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        ProductVariant.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        ProductVariant.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
    });
    root.add("quantity");
    root.add("attributes", function (attributes) {
      attributes.add("key");
      attributes.add("value");
    });
    root.add("cost", function (cost) {
      cost.add("totalAmount", function (totalAmount) {
        totalAmount.add("amount");
        totalAmount.add("currencyCode");
      });
      cost.add("subtotalAmount", function (subtotalAmount) {
        subtotalAmount.add("amount");
        subtotalAmount.add("currencyCode");
      });
      cost.add("amountPerQuantity", function (amountPerQuantity) {
        amountPerQuantity.add("amount");
        amountPerQuantity.add("currencyCode");
      });
      cost.add("compareAtAmountPerQuantity", function (compareAtAmountPerQuantity) {
        compareAtAmountPerQuantity.add("amount");
        compareAtAmountPerQuantity.add("currencyCode");
      });
    });
    root.add("discountAllocations", function (discountAllocations) {
      discountAllocations.add("discountedAmount", function (discountedAmount) {
        discountedAmount.add("amount");
        discountedAmount.add("currencyCode");
      });
      discountAllocations.add("discountApplication", function (discountApplication) {
        discountApplication.add("targetType");
        discountApplication.add("allocationMethod");
        discountApplication.add("targetSelection");
        discountApplication.add("value", function (value) {
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
        });
      });
      discountAllocations.addInlineFragmentOn("CartCodeDiscountAllocation", function (CartCodeDiscountAllocation) {
        CartCodeDiscountAllocation.add("code");
      });
      discountAllocations.addInlineFragmentOn("CartAutomaticDiscountAllocation", function (CartAutomaticDiscountAllocation) {
        CartAutomaticDiscountAllocation.add("title");
      });
      discountAllocations.addInlineFragmentOn("CartCustomDiscountAllocation", function (CartCustomDiscountAllocation) {
        CartCustomDiscountAllocation.add("title");
      });
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsed", function (amountUsed) {
      amountUsed.add("amount");
      amountUsed.add("currencyCode");
    });
    root.add("amountUsed", {
      alias: "amountUsedV2"
    }, function (amountUsed) {
      amountUsed.add("amount");
      amountUsed.add("currencyCode");
    });
    root.add("balance", function (balance) {
      balance.add("amount");
      balance.add("currencyCode");
    });
    root.add("balance", {
      alias: "balanceV2"
    }, function (balance) {
      balance.add("amount");
      balance.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.CartFragment = document.defineFragment("CartFragment", "Cart", function (root) {
    root.add("id");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("lines", {
      args: {
        first: 250
      }
    }, function (lines) {
      lines.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lines.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.CartLineFragment);
        });
      });
    });
    root.add("attributes", function (attributes) {
      attributes.add("key");
      attributes.add("value");
    });
    root.add("cost", function (cost) {
      cost.add("checkoutChargeAmount", function (checkoutChargeAmount) {
        checkoutChargeAmount.add("amount");
        checkoutChargeAmount.add("currencyCode");
      });
      cost.add("totalAmount", function (totalAmount) {
        totalAmount.add("amount");
        totalAmount.add("currencyCode");
      });
      cost.add("subtotalAmount", function (subtotalAmount) {
        subtotalAmount.add("amount");
        subtotalAmount.add("currencyCode");
      });
      cost.add("totalTaxAmount", function (totalTaxAmount) {
        totalTaxAmount.add("amount");
        totalTaxAmount.add("currencyCode");
      });
      cost.add("totalDutyAmount", function (totalDutyAmount) {
        totalDutyAmount.add("amount");
        totalDutyAmount.add("currencyCode");
      });
    });
    root.add("checkoutUrl");
    root.add("discountCodes", function (discountCodes) {
      discountCodes.add("applicable");
      discountCodes.add("code");
    });
    root.add("discountAllocations", function (discountAllocations) {
      discountAllocations.add("discountedAmount", function (discountedAmount) {
        discountedAmount.add("amount");
        discountedAmount.add("currencyCode");
      });
      discountAllocations.add("discountApplication", function (discountApplication) {
        discountApplication.add("targetType");
        discountApplication.add("allocationMethod");
        discountApplication.add("targetSelection");
        discountApplication.add("value", function (value) {
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
        });
      });
      discountAllocations.addInlineFragmentOn("CartCodeDiscountAllocation", function (CartCodeDiscountAllocation) {
        CartCodeDiscountAllocation.add("code");
      });
      discountAllocations.addInlineFragmentOn("CartAutomaticDiscountAllocation", function (CartAutomaticDiscountAllocation) {
        CartAutomaticDiscountAllocation.add("title");
      });
      discountAllocations.addInlineFragmentOn("CartCustomDiscountAllocation", function (CartCustomDiscountAllocation) {
        CartCustomDiscountAllocation.add("title");
      });
    });
    root.add("buyerIdentity", function (buyerIdentity) {
      buyerIdentity.add("countryCode");
      buyerIdentity.add("preferences", function (preferences) {
        preferences.add("delivery", function (delivery) {
          delivery.add("coordinates", function (coordinates) {
            coordinates.add("latitude");
            coordinates.add("longitude");
            coordinates.add("countryCode");
          });
          delivery.add("deliveryMethod");
          delivery.add("pickupHandle");
        });
        preferences.add("wallet");
      });
      buyerIdentity.add("email");
      buyerIdentity.add("phone");
      buyerIdentity.add("customer", function (customer) {
        customer.add("email");
      });
      buyerIdentity.add("deliveryAddressPreferences", function (deliveryAddressPreferences) {
        deliveryAddressPreferences.addInlineFragmentOn("MailingAddress", function (MailingAddress) {
          MailingAddress.add("address1");
          MailingAddress.add("address2");
          MailingAddress.add("city");
          MailingAddress.add("company");
          MailingAddress.add("country");
          MailingAddress.add("countryCodeV2");
          MailingAddress.add("firstName");
          MailingAddress.add("formatted");
          MailingAddress.add("formattedArea");
          MailingAddress.add("lastName");
          MailingAddress.add("latitude");
          MailingAddress.add("longitude");
          MailingAddress.add("name");
          MailingAddress.add("phone");
          MailingAddress.add("province");
          MailingAddress.add("provinceCode");
          MailingAddress.add("zip");
        });
      });
    });
    root.add("deliveryGroups", {
      args: {
        first: 10
      }
    }, function (deliveryGroups) {
      deliveryGroups.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      deliveryGroups.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("id");
          node.add("deliveryAddress", function (deliveryAddress) {
            deliveryAddress.add("address2");
            deliveryAddress.add("address1");
            deliveryAddress.add("city");
            deliveryAddress.add("company");
            deliveryAddress.add("country");
            deliveryAddress.add("countryCodeV2");
            deliveryAddress.add("firstName");
            deliveryAddress.add("formatted");
            deliveryAddress.add("formattedArea");
            deliveryAddress.add("lastName");
            deliveryAddress.add("latitude");
            deliveryAddress.add("longitude");
            deliveryAddress.add("name");
            deliveryAddress.add("phone");
            deliveryAddress.add("province");
            deliveryAddress.add("provinceCode");
          });
          node.add("deliveryOptions", function (deliveryOptions) {
            deliveryOptions.add("code");
            deliveryOptions.add("deliveryMethodType");
            deliveryOptions.add("description");
            deliveryOptions.add("estimatedCost", function (estimatedCost) {
              estimatedCost.add("amount");
              estimatedCost.add("currencyCode");
            });
            deliveryOptions.add("handle");
            deliveryOptions.add("title");
          });
          node.add("selectedDeliveryOption", function (selectedDeliveryOption) {
            selectedDeliveryOption.add("code");
            selectedDeliveryOption.add("deliveryMethodType");
            selectedDeliveryOption.add("description");
            selectedDeliveryOption.add("estimatedCost", function (estimatedCost) {
              estimatedCost.add("amount");
              estimatedCost.add("currencyCode");
            });
            selectedDeliveryOption.add("handle");
            selectedDeliveryOption.add("title");
          });
          node.add("cartLines", {
            args: {
              first: 250
            }
          }, function (cartLines) {
            cartLines.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            cartLines.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("id");
              });
            });
          });
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("note");
  });
  spreads.CartUserErrorFragment = document.defineFragment("CartUserErrorFragment", "CartUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.CartWarningFragment = document.defineFragment("CartWarningFragment", "CartWarning", function (root) {
    root.add("code");
    root.add("message");
  });
  document.addMutation("CartAttributesUpdate", [variables.CartAttributesUpdate.attributes, variables.CartAttributesUpdate.cartId], function (root) {
    root.add("cartAttributesUpdate", {
      args: {
        attributes: variables.CartAttributesUpdate.attributes,
        cartId: variables.CartAttributesUpdate.cartId
      }
    }, function (cartAttributesUpdate) {
      cartAttributesUpdate.add("cart", function (cart) {
        cart.addFragment(spreads.CartFragment);
      });
      cartAttributesUpdate.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.CartUserErrorFragment);
      });
      cartAttributesUpdate.add("warnings", function (warnings) {
        warnings.addFragment(spreads.CartWarningFragment);
      });
    });
  }, client.internationalizationDirective);
  return document;
}

function query$16(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.CartBuyerIdentityUpdate = {};
  variables.CartBuyerIdentityUpdate.buyerIdentity = client.variable("buyerIdentity", "CartBuyerIdentityInput!");
  variables.CartBuyerIdentityUpdate.cartId = client.variable("cartId", "ID!");
  spreads.CartLineFragment = document.defineFragment("CartLineFragment", "BaseCartLine", function (root) {
    root.add("id");
    root.add("merchandise", function (merchandise) {
      merchandise.addInlineFragmentOn("ProductVariant", function (ProductVariant) {
        ProductVariant.add("id");
        ProductVariant.add("title");
        ProductVariant.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        ProductVariant.add("product", function (product) {
          product.add("id");
          product.add("handle");
          product.add("title");
        });
        ProductVariant.add("weight");
        ProductVariant.add("availableForSale", {
          alias: "available"
        });
        ProductVariant.add("sku");
        ProductVariant.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        ProductVariant.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        ProductVariant.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        ProductVariant.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        ProductVariant.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
    });
    root.add("quantity");
    root.add("attributes", function (attributes) {
      attributes.add("key");
      attributes.add("value");
    });
    root.add("cost", function (cost) {
      cost.add("totalAmount", function (totalAmount) {
        totalAmount.add("amount");
        totalAmount.add("currencyCode");
      });
      cost.add("subtotalAmount", function (subtotalAmount) {
        subtotalAmount.add("amount");
        subtotalAmount.add("currencyCode");
      });
      cost.add("amountPerQuantity", function (amountPerQuantity) {
        amountPerQuantity.add("amount");
        amountPerQuantity.add("currencyCode");
      });
      cost.add("compareAtAmountPerQuantity", function (compareAtAmountPerQuantity) {
        compareAtAmountPerQuantity.add("amount");
        compareAtAmountPerQuantity.add("currencyCode");
      });
    });
    root.add("discountAllocations", function (discountAllocations) {
      discountAllocations.add("discountedAmount", function (discountedAmount) {
        discountedAmount.add("amount");
        discountedAmount.add("currencyCode");
      });
      discountAllocations.add("discountApplication", function (discountApplication) {
        discountApplication.add("targetType");
        discountApplication.add("allocationMethod");
        discountApplication.add("targetSelection");
        discountApplication.add("value", function (value) {
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
        });
      });
      discountAllocations.addInlineFragmentOn("CartCodeDiscountAllocation", function (CartCodeDiscountAllocation) {
        CartCodeDiscountAllocation.add("code");
      });
      discountAllocations.addInlineFragmentOn("CartAutomaticDiscountAllocation", function (CartAutomaticDiscountAllocation) {
        CartAutomaticDiscountAllocation.add("title");
      });
      discountAllocations.addInlineFragmentOn("CartCustomDiscountAllocation", function (CartCustomDiscountAllocation) {
        CartCustomDiscountAllocation.add("title");
      });
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsed", function (amountUsed) {
      amountUsed.add("amount");
      amountUsed.add("currencyCode");
    });
    root.add("amountUsed", {
      alias: "amountUsedV2"
    }, function (amountUsed) {
      amountUsed.add("amount");
      amountUsed.add("currencyCode");
    });
    root.add("balance", function (balance) {
      balance.add("amount");
      balance.add("currencyCode");
    });
    root.add("balance", {
      alias: "balanceV2"
    }, function (balance) {
      balance.add("amount");
      balance.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.CartFragment = document.defineFragment("CartFragment", "Cart", function (root) {
    root.add("id");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("lines", {
      args: {
        first: 250
      }
    }, function (lines) {
      lines.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lines.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.CartLineFragment);
        });
      });
    });
    root.add("attributes", function (attributes) {
      attributes.add("key");
      attributes.add("value");
    });
    root.add("cost", function (cost) {
      cost.add("checkoutChargeAmount", function (checkoutChargeAmount) {
        checkoutChargeAmount.add("amount");
        checkoutChargeAmount.add("currencyCode");
      });
      cost.add("totalAmount", function (totalAmount) {
        totalAmount.add("amount");
        totalAmount.add("currencyCode");
      });
      cost.add("subtotalAmount", function (subtotalAmount) {
        subtotalAmount.add("amount");
        subtotalAmount.add("currencyCode");
      });
      cost.add("totalTaxAmount", function (totalTaxAmount) {
        totalTaxAmount.add("amount");
        totalTaxAmount.add("currencyCode");
      });
      cost.add("totalDutyAmount", function (totalDutyAmount) {
        totalDutyAmount.add("amount");
        totalDutyAmount.add("currencyCode");
      });
    });
    root.add("checkoutUrl");
    root.add("discountCodes", function (discountCodes) {
      discountCodes.add("applicable");
      discountCodes.add("code");
    });
    root.add("discountAllocations", function (discountAllocations) {
      discountAllocations.add("discountedAmount", function (discountedAmount) {
        discountedAmount.add("amount");
        discountedAmount.add("currencyCode");
      });
      discountAllocations.add("discountApplication", function (discountApplication) {
        discountApplication.add("targetType");
        discountApplication.add("allocationMethod");
        discountApplication.add("targetSelection");
        discountApplication.add("value", function (value) {
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
        });
      });
      discountAllocations.addInlineFragmentOn("CartCodeDiscountAllocation", function (CartCodeDiscountAllocation) {
        CartCodeDiscountAllocation.add("code");
      });
      discountAllocations.addInlineFragmentOn("CartAutomaticDiscountAllocation", function (CartAutomaticDiscountAllocation) {
        CartAutomaticDiscountAllocation.add("title");
      });
      discountAllocations.addInlineFragmentOn("CartCustomDiscountAllocation", function (CartCustomDiscountAllocation) {
        CartCustomDiscountAllocation.add("title");
      });
    });
    root.add("buyerIdentity", function (buyerIdentity) {
      buyerIdentity.add("countryCode");
      buyerIdentity.add("preferences", function (preferences) {
        preferences.add("delivery", function (delivery) {
          delivery.add("coordinates", function (coordinates) {
            coordinates.add("latitude");
            coordinates.add("longitude");
            coordinates.add("countryCode");
          });
          delivery.add("deliveryMethod");
          delivery.add("pickupHandle");
        });
        preferences.add("wallet");
      });
      buyerIdentity.add("email");
      buyerIdentity.add("phone");
      buyerIdentity.add("customer", function (customer) {
        customer.add("email");
      });
      buyerIdentity.add("deliveryAddressPreferences", function (deliveryAddressPreferences) {
        deliveryAddressPreferences.addInlineFragmentOn("MailingAddress", function (MailingAddress) {
          MailingAddress.add("address1");
          MailingAddress.add("address2");
          MailingAddress.add("city");
          MailingAddress.add("company");
          MailingAddress.add("country");
          MailingAddress.add("countryCodeV2");
          MailingAddress.add("firstName");
          MailingAddress.add("formatted");
          MailingAddress.add("formattedArea");
          MailingAddress.add("lastName");
          MailingAddress.add("latitude");
          MailingAddress.add("longitude");
          MailingAddress.add("name");
          MailingAddress.add("phone");
          MailingAddress.add("province");
          MailingAddress.add("provinceCode");
          MailingAddress.add("zip");
        });
      });
    });
    root.add("deliveryGroups", {
      args: {
        first: 10
      }
    }, function (deliveryGroups) {
      deliveryGroups.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      deliveryGroups.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("id");
          node.add("deliveryAddress", function (deliveryAddress) {
            deliveryAddress.add("address2");
            deliveryAddress.add("address1");
            deliveryAddress.add("city");
            deliveryAddress.add("company");
            deliveryAddress.add("country");
            deliveryAddress.add("countryCodeV2");
            deliveryAddress.add("firstName");
            deliveryAddress.add("formatted");
            deliveryAddress.add("formattedArea");
            deliveryAddress.add("lastName");
            deliveryAddress.add("latitude");
            deliveryAddress.add("longitude");
            deliveryAddress.add("name");
            deliveryAddress.add("phone");
            deliveryAddress.add("province");
            deliveryAddress.add("provinceCode");
          });
          node.add("deliveryOptions", function (deliveryOptions) {
            deliveryOptions.add("code");
            deliveryOptions.add("deliveryMethodType");
            deliveryOptions.add("description");
            deliveryOptions.add("estimatedCost", function (estimatedCost) {
              estimatedCost.add("amount");
              estimatedCost.add("currencyCode");
            });
            deliveryOptions.add("handle");
            deliveryOptions.add("title");
          });
          node.add("selectedDeliveryOption", function (selectedDeliveryOption) {
            selectedDeliveryOption.add("code");
            selectedDeliveryOption.add("deliveryMethodType");
            selectedDeliveryOption.add("description");
            selectedDeliveryOption.add("estimatedCost", function (estimatedCost) {
              estimatedCost.add("amount");
              estimatedCost.add("currencyCode");
            });
            selectedDeliveryOption.add("handle");
            selectedDeliveryOption.add("title");
          });
          node.add("cartLines", {
            args: {
              first: 250
            }
          }, function (cartLines) {
            cartLines.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            cartLines.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("id");
              });
            });
          });
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("note");
  });
  spreads.CartUserErrorFragment = document.defineFragment("CartUserErrorFragment", "CartUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.CartWarningFragment = document.defineFragment("CartWarningFragment", "CartWarning", function (root) {
    root.add("code");
    root.add("message");
  });
  document.addMutation("CartBuyerIdentityUpdate", [variables.CartBuyerIdentityUpdate.buyerIdentity, variables.CartBuyerIdentityUpdate.cartId], function (root) {
    root.add("cartBuyerIdentityUpdate", {
      args: {
        buyerIdentity: variables.CartBuyerIdentityUpdate.buyerIdentity,
        cartId: variables.CartBuyerIdentityUpdate.cartId
      }
    }, function (cartBuyerIdentityUpdate) {
      cartBuyerIdentityUpdate.add("cart", function (cart) {
        cart.addFragment(spreads.CartFragment);
      });
      cartBuyerIdentityUpdate.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.CartUserErrorFragment);
      });
      cartBuyerIdentityUpdate.add("warnings", function (warnings) {
        warnings.addFragment(spreads.CartWarningFragment);
      });
    });
  }, client.internationalizationDirective);
  return document;
}

function query$17(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.CartDiscountCodesUpdate = {};
  variables.CartDiscountCodesUpdate.cartId = client.variable("cartId", "ID!");
  variables.CartDiscountCodesUpdate.discountCodes = client.variable("discountCodes", "[String!]!");
  spreads.CartLineFragment = document.defineFragment("CartLineFragment", "BaseCartLine", function (root) {
    root.add("id");
    root.add("merchandise", function (merchandise) {
      merchandise.addInlineFragmentOn("ProductVariant", function (ProductVariant) {
        ProductVariant.add("id");
        ProductVariant.add("title");
        ProductVariant.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        ProductVariant.add("product", function (product) {
          product.add("id");
          product.add("handle");
          product.add("title");
        });
        ProductVariant.add("weight");
        ProductVariant.add("availableForSale", {
          alias: "available"
        });
        ProductVariant.add("sku");
        ProductVariant.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        ProductVariant.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        ProductVariant.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        ProductVariant.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        ProductVariant.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
    });
    root.add("quantity");
    root.add("attributes", function (attributes) {
      attributes.add("key");
      attributes.add("value");
    });
    root.add("cost", function (cost) {
      cost.add("totalAmount", function (totalAmount) {
        totalAmount.add("amount");
        totalAmount.add("currencyCode");
      });
      cost.add("subtotalAmount", function (subtotalAmount) {
        subtotalAmount.add("amount");
        subtotalAmount.add("currencyCode");
      });
      cost.add("amountPerQuantity", function (amountPerQuantity) {
        amountPerQuantity.add("amount");
        amountPerQuantity.add("currencyCode");
      });
      cost.add("compareAtAmountPerQuantity", function (compareAtAmountPerQuantity) {
        compareAtAmountPerQuantity.add("amount");
        compareAtAmountPerQuantity.add("currencyCode");
      });
    });
    root.add("discountAllocations", function (discountAllocations) {
      discountAllocations.add("discountedAmount", function (discountedAmount) {
        discountedAmount.add("amount");
        discountedAmount.add("currencyCode");
      });
      discountAllocations.add("discountApplication", function (discountApplication) {
        discountApplication.add("targetType");
        discountApplication.add("allocationMethod");
        discountApplication.add("targetSelection");
        discountApplication.add("value", function (value) {
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
        });
      });
      discountAllocations.addInlineFragmentOn("CartCodeDiscountAllocation", function (CartCodeDiscountAllocation) {
        CartCodeDiscountAllocation.add("code");
      });
      discountAllocations.addInlineFragmentOn("CartAutomaticDiscountAllocation", function (CartAutomaticDiscountAllocation) {
        CartAutomaticDiscountAllocation.add("title");
      });
      discountAllocations.addInlineFragmentOn("CartCustomDiscountAllocation", function (CartCustomDiscountAllocation) {
        CartCustomDiscountAllocation.add("title");
      });
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsed", function (amountUsed) {
      amountUsed.add("amount");
      amountUsed.add("currencyCode");
    });
    root.add("amountUsed", {
      alias: "amountUsedV2"
    }, function (amountUsed) {
      amountUsed.add("amount");
      amountUsed.add("currencyCode");
    });
    root.add("balance", function (balance) {
      balance.add("amount");
      balance.add("currencyCode");
    });
    root.add("balance", {
      alias: "balanceV2"
    }, function (balance) {
      balance.add("amount");
      balance.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.CartFragment = document.defineFragment("CartFragment", "Cart", function (root) {
    root.add("id");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("lines", {
      args: {
        first: 250
      }
    }, function (lines) {
      lines.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lines.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.CartLineFragment);
        });
      });
    });
    root.add("attributes", function (attributes) {
      attributes.add("key");
      attributes.add("value");
    });
    root.add("cost", function (cost) {
      cost.add("checkoutChargeAmount", function (checkoutChargeAmount) {
        checkoutChargeAmount.add("amount");
        checkoutChargeAmount.add("currencyCode");
      });
      cost.add("totalAmount", function (totalAmount) {
        totalAmount.add("amount");
        totalAmount.add("currencyCode");
      });
      cost.add("subtotalAmount", function (subtotalAmount) {
        subtotalAmount.add("amount");
        subtotalAmount.add("currencyCode");
      });
      cost.add("totalTaxAmount", function (totalTaxAmount) {
        totalTaxAmount.add("amount");
        totalTaxAmount.add("currencyCode");
      });
      cost.add("totalDutyAmount", function (totalDutyAmount) {
        totalDutyAmount.add("amount");
        totalDutyAmount.add("currencyCode");
      });
    });
    root.add("checkoutUrl");
    root.add("discountCodes", function (discountCodes) {
      discountCodes.add("applicable");
      discountCodes.add("code");
    });
    root.add("discountAllocations", function (discountAllocations) {
      discountAllocations.add("discountedAmount", function (discountedAmount) {
        discountedAmount.add("amount");
        discountedAmount.add("currencyCode");
      });
      discountAllocations.add("discountApplication", function (discountApplication) {
        discountApplication.add("targetType");
        discountApplication.add("allocationMethod");
        discountApplication.add("targetSelection");
        discountApplication.add("value", function (value) {
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
        });
      });
      discountAllocations.addInlineFragmentOn("CartCodeDiscountAllocation", function (CartCodeDiscountAllocation) {
        CartCodeDiscountAllocation.add("code");
      });
      discountAllocations.addInlineFragmentOn("CartAutomaticDiscountAllocation", function (CartAutomaticDiscountAllocation) {
        CartAutomaticDiscountAllocation.add("title");
      });
      discountAllocations.addInlineFragmentOn("CartCustomDiscountAllocation", function (CartCustomDiscountAllocation) {
        CartCustomDiscountAllocation.add("title");
      });
    });
    root.add("buyerIdentity", function (buyerIdentity) {
      buyerIdentity.add("countryCode");
      buyerIdentity.add("preferences", function (preferences) {
        preferences.add("delivery", function (delivery) {
          delivery.add("coordinates", function (coordinates) {
            coordinates.add("latitude");
            coordinates.add("longitude");
            coordinates.add("countryCode");
          });
          delivery.add("deliveryMethod");
          delivery.add("pickupHandle");
        });
        preferences.add("wallet");
      });
      buyerIdentity.add("email");
      buyerIdentity.add("phone");
      buyerIdentity.add("customer", function (customer) {
        customer.add("email");
      });
      buyerIdentity.add("deliveryAddressPreferences", function (deliveryAddressPreferences) {
        deliveryAddressPreferences.addInlineFragmentOn("MailingAddress", function (MailingAddress) {
          MailingAddress.add("address1");
          MailingAddress.add("address2");
          MailingAddress.add("city");
          MailingAddress.add("company");
          MailingAddress.add("country");
          MailingAddress.add("countryCodeV2");
          MailingAddress.add("firstName");
          MailingAddress.add("formatted");
          MailingAddress.add("formattedArea");
          MailingAddress.add("lastName");
          MailingAddress.add("latitude");
          MailingAddress.add("longitude");
          MailingAddress.add("name");
          MailingAddress.add("phone");
          MailingAddress.add("province");
          MailingAddress.add("provinceCode");
          MailingAddress.add("zip");
        });
      });
    });
    root.add("deliveryGroups", {
      args: {
        first: 10
      }
    }, function (deliveryGroups) {
      deliveryGroups.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      deliveryGroups.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("id");
          node.add("deliveryAddress", function (deliveryAddress) {
            deliveryAddress.add("address2");
            deliveryAddress.add("address1");
            deliveryAddress.add("city");
            deliveryAddress.add("company");
            deliveryAddress.add("country");
            deliveryAddress.add("countryCodeV2");
            deliveryAddress.add("firstName");
            deliveryAddress.add("formatted");
            deliveryAddress.add("formattedArea");
            deliveryAddress.add("lastName");
            deliveryAddress.add("latitude");
            deliveryAddress.add("longitude");
            deliveryAddress.add("name");
            deliveryAddress.add("phone");
            deliveryAddress.add("province");
            deliveryAddress.add("provinceCode");
          });
          node.add("deliveryOptions", function (deliveryOptions) {
            deliveryOptions.add("code");
            deliveryOptions.add("deliveryMethodType");
            deliveryOptions.add("description");
            deliveryOptions.add("estimatedCost", function (estimatedCost) {
              estimatedCost.add("amount");
              estimatedCost.add("currencyCode");
            });
            deliveryOptions.add("handle");
            deliveryOptions.add("title");
          });
          node.add("selectedDeliveryOption", function (selectedDeliveryOption) {
            selectedDeliveryOption.add("code");
            selectedDeliveryOption.add("deliveryMethodType");
            selectedDeliveryOption.add("description");
            selectedDeliveryOption.add("estimatedCost", function (estimatedCost) {
              estimatedCost.add("amount");
              estimatedCost.add("currencyCode");
            });
            selectedDeliveryOption.add("handle");
            selectedDeliveryOption.add("title");
          });
          node.add("cartLines", {
            args: {
              first: 250
            }
          }, function (cartLines) {
            cartLines.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            cartLines.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("id");
              });
            });
          });
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("note");
  });
  spreads.CartUserErrorFragment = document.defineFragment("CartUserErrorFragment", "CartUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.CartWarningFragment = document.defineFragment("CartWarningFragment", "CartWarning", function (root) {
    root.add("code");
    root.add("message");
  });
  document.addMutation("CartDiscountCodesUpdate", [variables.CartDiscountCodesUpdate.cartId, variables.CartDiscountCodesUpdate.discountCodes], function (root) {
    root.add("cartDiscountCodesUpdate", {
      args: {
        cartId: variables.CartDiscountCodesUpdate.cartId,
        discountCodes: variables.CartDiscountCodesUpdate.discountCodes
      }
    }, function (cartDiscountCodesUpdate) {
      cartDiscountCodesUpdate.add("cart", function (cart) {
        cart.addFragment(spreads.CartFragment);
      });
      cartDiscountCodesUpdate.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.CartUserErrorFragment);
      });
      cartDiscountCodesUpdate.add("warnings", function (warnings) {
        warnings.addFragment(spreads.CartWarningFragment);
      });
    });
  }, client.internationalizationDirective);
  return document;
}

function query$18(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.CartGiftCardCodesUpdate = {};
  variables.CartGiftCardCodesUpdate.cartId = client.variable("cartId", "ID!");
  variables.CartGiftCardCodesUpdate.giftCardCodes = client.variable("giftCardCodes", "[String!]!");
  spreads.CartLineFragment = document.defineFragment("CartLineFragment", "BaseCartLine", function (root) {
    root.add("id");
    root.add("merchandise", function (merchandise) {
      merchandise.addInlineFragmentOn("ProductVariant", function (ProductVariant) {
        ProductVariant.add("id");
        ProductVariant.add("title");
        ProductVariant.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        ProductVariant.add("product", function (product) {
          product.add("id");
          product.add("handle");
          product.add("title");
        });
        ProductVariant.add("weight");
        ProductVariant.add("availableForSale", {
          alias: "available"
        });
        ProductVariant.add("sku");
        ProductVariant.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        ProductVariant.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        ProductVariant.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        ProductVariant.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        ProductVariant.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
    });
    root.add("quantity");
    root.add("attributes", function (attributes) {
      attributes.add("key");
      attributes.add("value");
    });
    root.add("cost", function (cost) {
      cost.add("totalAmount", function (totalAmount) {
        totalAmount.add("amount");
        totalAmount.add("currencyCode");
      });
      cost.add("subtotalAmount", function (subtotalAmount) {
        subtotalAmount.add("amount");
        subtotalAmount.add("currencyCode");
      });
      cost.add("amountPerQuantity", function (amountPerQuantity) {
        amountPerQuantity.add("amount");
        amountPerQuantity.add("currencyCode");
      });
      cost.add("compareAtAmountPerQuantity", function (compareAtAmountPerQuantity) {
        compareAtAmountPerQuantity.add("amount");
        compareAtAmountPerQuantity.add("currencyCode");
      });
    });
    root.add("discountAllocations", function (discountAllocations) {
      discountAllocations.add("discountedAmount", function (discountedAmount) {
        discountedAmount.add("amount");
        discountedAmount.add("currencyCode");
      });
      discountAllocations.add("discountApplication", function (discountApplication) {
        discountApplication.add("targetType");
        discountApplication.add("allocationMethod");
        discountApplication.add("targetSelection");
        discountApplication.add("value", function (value) {
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
        });
      });
      discountAllocations.addInlineFragmentOn("CartCodeDiscountAllocation", function (CartCodeDiscountAllocation) {
        CartCodeDiscountAllocation.add("code");
      });
      discountAllocations.addInlineFragmentOn("CartAutomaticDiscountAllocation", function (CartAutomaticDiscountAllocation) {
        CartAutomaticDiscountAllocation.add("title");
      });
      discountAllocations.addInlineFragmentOn("CartCustomDiscountAllocation", function (CartCustomDiscountAllocation) {
        CartCustomDiscountAllocation.add("title");
      });
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsed", function (amountUsed) {
      amountUsed.add("amount");
      amountUsed.add("currencyCode");
    });
    root.add("amountUsed", {
      alias: "amountUsedV2"
    }, function (amountUsed) {
      amountUsed.add("amount");
      amountUsed.add("currencyCode");
    });
    root.add("balance", function (balance) {
      balance.add("amount");
      balance.add("currencyCode");
    });
    root.add("balance", {
      alias: "balanceV2"
    }, function (balance) {
      balance.add("amount");
      balance.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.CartFragment = document.defineFragment("CartFragment", "Cart", function (root) {
    root.add("id");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("lines", {
      args: {
        first: 250
      }
    }, function (lines) {
      lines.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lines.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.CartLineFragment);
        });
      });
    });
    root.add("attributes", function (attributes) {
      attributes.add("key");
      attributes.add("value");
    });
    root.add("cost", function (cost) {
      cost.add("checkoutChargeAmount", function (checkoutChargeAmount) {
        checkoutChargeAmount.add("amount");
        checkoutChargeAmount.add("currencyCode");
      });
      cost.add("totalAmount", function (totalAmount) {
        totalAmount.add("amount");
        totalAmount.add("currencyCode");
      });
      cost.add("subtotalAmount", function (subtotalAmount) {
        subtotalAmount.add("amount");
        subtotalAmount.add("currencyCode");
      });
      cost.add("totalTaxAmount", function (totalTaxAmount) {
        totalTaxAmount.add("amount");
        totalTaxAmount.add("currencyCode");
      });
      cost.add("totalDutyAmount", function (totalDutyAmount) {
        totalDutyAmount.add("amount");
        totalDutyAmount.add("currencyCode");
      });
    });
    root.add("checkoutUrl");
    root.add("discountCodes", function (discountCodes) {
      discountCodes.add("applicable");
      discountCodes.add("code");
    });
    root.add("discountAllocations", function (discountAllocations) {
      discountAllocations.add("discountedAmount", function (discountedAmount) {
        discountedAmount.add("amount");
        discountedAmount.add("currencyCode");
      });
      discountAllocations.add("discountApplication", function (discountApplication) {
        discountApplication.add("targetType");
        discountApplication.add("allocationMethod");
        discountApplication.add("targetSelection");
        discountApplication.add("value", function (value) {
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
        });
      });
      discountAllocations.addInlineFragmentOn("CartCodeDiscountAllocation", function (CartCodeDiscountAllocation) {
        CartCodeDiscountAllocation.add("code");
      });
      discountAllocations.addInlineFragmentOn("CartAutomaticDiscountAllocation", function (CartAutomaticDiscountAllocation) {
        CartAutomaticDiscountAllocation.add("title");
      });
      discountAllocations.addInlineFragmentOn("CartCustomDiscountAllocation", function (CartCustomDiscountAllocation) {
        CartCustomDiscountAllocation.add("title");
      });
    });
    root.add("buyerIdentity", function (buyerIdentity) {
      buyerIdentity.add("countryCode");
      buyerIdentity.add("preferences", function (preferences) {
        preferences.add("delivery", function (delivery) {
          delivery.add("coordinates", function (coordinates) {
            coordinates.add("latitude");
            coordinates.add("longitude");
            coordinates.add("countryCode");
          });
          delivery.add("deliveryMethod");
          delivery.add("pickupHandle");
        });
        preferences.add("wallet");
      });
      buyerIdentity.add("email");
      buyerIdentity.add("phone");
      buyerIdentity.add("customer", function (customer) {
        customer.add("email");
      });
      buyerIdentity.add("deliveryAddressPreferences", function (deliveryAddressPreferences) {
        deliveryAddressPreferences.addInlineFragmentOn("MailingAddress", function (MailingAddress) {
          MailingAddress.add("address1");
          MailingAddress.add("address2");
          MailingAddress.add("city");
          MailingAddress.add("company");
          MailingAddress.add("country");
          MailingAddress.add("countryCodeV2");
          MailingAddress.add("firstName");
          MailingAddress.add("formatted");
          MailingAddress.add("formattedArea");
          MailingAddress.add("lastName");
          MailingAddress.add("latitude");
          MailingAddress.add("longitude");
          MailingAddress.add("name");
          MailingAddress.add("phone");
          MailingAddress.add("province");
          MailingAddress.add("provinceCode");
          MailingAddress.add("zip");
        });
      });
    });
    root.add("deliveryGroups", {
      args: {
        first: 10
      }
    }, function (deliveryGroups) {
      deliveryGroups.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      deliveryGroups.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("id");
          node.add("deliveryAddress", function (deliveryAddress) {
            deliveryAddress.add("address2");
            deliveryAddress.add("address1");
            deliveryAddress.add("city");
            deliveryAddress.add("company");
            deliveryAddress.add("country");
            deliveryAddress.add("countryCodeV2");
            deliveryAddress.add("firstName");
            deliveryAddress.add("formatted");
            deliveryAddress.add("formattedArea");
            deliveryAddress.add("lastName");
            deliveryAddress.add("latitude");
            deliveryAddress.add("longitude");
            deliveryAddress.add("name");
            deliveryAddress.add("phone");
            deliveryAddress.add("province");
            deliveryAddress.add("provinceCode");
          });
          node.add("deliveryOptions", function (deliveryOptions) {
            deliveryOptions.add("code");
            deliveryOptions.add("deliveryMethodType");
            deliveryOptions.add("description");
            deliveryOptions.add("estimatedCost", function (estimatedCost) {
              estimatedCost.add("amount");
              estimatedCost.add("currencyCode");
            });
            deliveryOptions.add("handle");
            deliveryOptions.add("title");
          });
          node.add("selectedDeliveryOption", function (selectedDeliveryOption) {
            selectedDeliveryOption.add("code");
            selectedDeliveryOption.add("deliveryMethodType");
            selectedDeliveryOption.add("description");
            selectedDeliveryOption.add("estimatedCost", function (estimatedCost) {
              estimatedCost.add("amount");
              estimatedCost.add("currencyCode");
            });
            selectedDeliveryOption.add("handle");
            selectedDeliveryOption.add("title");
          });
          node.add("cartLines", {
            args: {
              first: 250
            }
          }, function (cartLines) {
            cartLines.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            cartLines.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("id");
              });
            });
          });
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("note");
  });
  spreads.CartUserErrorFragment = document.defineFragment("CartUserErrorFragment", "CartUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.CartWarningFragment = document.defineFragment("CartWarningFragment", "CartWarning", function (root) {
    root.add("code");
    root.add("message");
  });
  document.addMutation("CartGiftCardCodesUpdate", [variables.CartGiftCardCodesUpdate.cartId, variables.CartGiftCardCodesUpdate.giftCardCodes], function (root) {
    root.add("cartGiftCardCodesUpdate", {
      args: {
        cartId: variables.CartGiftCardCodesUpdate.cartId,
        giftCardCodes: variables.CartGiftCardCodesUpdate.giftCardCodes
      }
    }, function (cartGiftCardCodesUpdate) {
      cartGiftCardCodesUpdate.add("cart", function (cart) {
        cart.addFragment(spreads.CartFragment);
      });
      cartGiftCardCodesUpdate.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.CartUserErrorFragment);
      });
      cartGiftCardCodesUpdate.add("warnings", function (warnings) {
        warnings.addFragment(spreads.CartWarningFragment);
      });
    });
  }, client.internationalizationDirective);
  return document;
}

function query$19(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.CartLinesAdd = {};
  variables.CartLinesAdd.cartId = client.variable("cartId", "ID!");
  variables.CartLinesAdd.lines = client.variable("lines", "[CartLineInput!]!");
  spreads.CartLineFragment = document.defineFragment("CartLineFragment", "BaseCartLine", function (root) {
    root.add("id");
    root.add("merchandise", function (merchandise) {
      merchandise.addInlineFragmentOn("ProductVariant", function (ProductVariant) {
        ProductVariant.add("id");
        ProductVariant.add("title");
        ProductVariant.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        ProductVariant.add("product", function (product) {
          product.add("id");
          product.add("handle");
          product.add("title");
        });
        ProductVariant.add("weight");
        ProductVariant.add("availableForSale", {
          alias: "available"
        });
        ProductVariant.add("sku");
        ProductVariant.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        ProductVariant.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        ProductVariant.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        ProductVariant.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        ProductVariant.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
    });
    root.add("quantity");
    root.add("attributes", function (attributes) {
      attributes.add("key");
      attributes.add("value");
    });
    root.add("cost", function (cost) {
      cost.add("totalAmount", function (totalAmount) {
        totalAmount.add("amount");
        totalAmount.add("currencyCode");
      });
      cost.add("subtotalAmount", function (subtotalAmount) {
        subtotalAmount.add("amount");
        subtotalAmount.add("currencyCode");
      });
      cost.add("amountPerQuantity", function (amountPerQuantity) {
        amountPerQuantity.add("amount");
        amountPerQuantity.add("currencyCode");
      });
      cost.add("compareAtAmountPerQuantity", function (compareAtAmountPerQuantity) {
        compareAtAmountPerQuantity.add("amount");
        compareAtAmountPerQuantity.add("currencyCode");
      });
    });
    root.add("discountAllocations", function (discountAllocations) {
      discountAllocations.add("discountedAmount", function (discountedAmount) {
        discountedAmount.add("amount");
        discountedAmount.add("currencyCode");
      });
      discountAllocations.add("discountApplication", function (discountApplication) {
        discountApplication.add("targetType");
        discountApplication.add("allocationMethod");
        discountApplication.add("targetSelection");
        discountApplication.add("value", function (value) {
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
        });
      });
      discountAllocations.addInlineFragmentOn("CartCodeDiscountAllocation", function (CartCodeDiscountAllocation) {
        CartCodeDiscountAllocation.add("code");
      });
      discountAllocations.addInlineFragmentOn("CartAutomaticDiscountAllocation", function (CartAutomaticDiscountAllocation) {
        CartAutomaticDiscountAllocation.add("title");
      });
      discountAllocations.addInlineFragmentOn("CartCustomDiscountAllocation", function (CartCustomDiscountAllocation) {
        CartCustomDiscountAllocation.add("title");
      });
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsed", function (amountUsed) {
      amountUsed.add("amount");
      amountUsed.add("currencyCode");
    });
    root.add("amountUsed", {
      alias: "amountUsedV2"
    }, function (amountUsed) {
      amountUsed.add("amount");
      amountUsed.add("currencyCode");
    });
    root.add("balance", function (balance) {
      balance.add("amount");
      balance.add("currencyCode");
    });
    root.add("balance", {
      alias: "balanceV2"
    }, function (balance) {
      balance.add("amount");
      balance.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.CartFragment = document.defineFragment("CartFragment", "Cart", function (root) {
    root.add("id");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("lines", {
      args: {
        first: 250
      }
    }, function (lines) {
      lines.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lines.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.CartLineFragment);
        });
      });
    });
    root.add("attributes", function (attributes) {
      attributes.add("key");
      attributes.add("value");
    });
    root.add("cost", function (cost) {
      cost.add("checkoutChargeAmount", function (checkoutChargeAmount) {
        checkoutChargeAmount.add("amount");
        checkoutChargeAmount.add("currencyCode");
      });
      cost.add("totalAmount", function (totalAmount) {
        totalAmount.add("amount");
        totalAmount.add("currencyCode");
      });
      cost.add("subtotalAmount", function (subtotalAmount) {
        subtotalAmount.add("amount");
        subtotalAmount.add("currencyCode");
      });
      cost.add("totalTaxAmount", function (totalTaxAmount) {
        totalTaxAmount.add("amount");
        totalTaxAmount.add("currencyCode");
      });
      cost.add("totalDutyAmount", function (totalDutyAmount) {
        totalDutyAmount.add("amount");
        totalDutyAmount.add("currencyCode");
      });
    });
    root.add("checkoutUrl");
    root.add("discountCodes", function (discountCodes) {
      discountCodes.add("applicable");
      discountCodes.add("code");
    });
    root.add("discountAllocations", function (discountAllocations) {
      discountAllocations.add("discountedAmount", function (discountedAmount) {
        discountedAmount.add("amount");
        discountedAmount.add("currencyCode");
      });
      discountAllocations.add("discountApplication", function (discountApplication) {
        discountApplication.add("targetType");
        discountApplication.add("allocationMethod");
        discountApplication.add("targetSelection");
        discountApplication.add("value", function (value) {
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
        });
      });
      discountAllocations.addInlineFragmentOn("CartCodeDiscountAllocation", function (CartCodeDiscountAllocation) {
        CartCodeDiscountAllocation.add("code");
      });
      discountAllocations.addInlineFragmentOn("CartAutomaticDiscountAllocation", function (CartAutomaticDiscountAllocation) {
        CartAutomaticDiscountAllocation.add("title");
      });
      discountAllocations.addInlineFragmentOn("CartCustomDiscountAllocation", function (CartCustomDiscountAllocation) {
        CartCustomDiscountAllocation.add("title");
      });
    });
    root.add("buyerIdentity", function (buyerIdentity) {
      buyerIdentity.add("countryCode");
      buyerIdentity.add("preferences", function (preferences) {
        preferences.add("delivery", function (delivery) {
          delivery.add("coordinates", function (coordinates) {
            coordinates.add("latitude");
            coordinates.add("longitude");
            coordinates.add("countryCode");
          });
          delivery.add("deliveryMethod");
          delivery.add("pickupHandle");
        });
        preferences.add("wallet");
      });
      buyerIdentity.add("email");
      buyerIdentity.add("phone");
      buyerIdentity.add("customer", function (customer) {
        customer.add("email");
      });
      buyerIdentity.add("deliveryAddressPreferences", function (deliveryAddressPreferences) {
        deliveryAddressPreferences.addInlineFragmentOn("MailingAddress", function (MailingAddress) {
          MailingAddress.add("address1");
          MailingAddress.add("address2");
          MailingAddress.add("city");
          MailingAddress.add("company");
          MailingAddress.add("country");
          MailingAddress.add("countryCodeV2");
          MailingAddress.add("firstName");
          MailingAddress.add("formatted");
          MailingAddress.add("formattedArea");
          MailingAddress.add("lastName");
          MailingAddress.add("latitude");
          MailingAddress.add("longitude");
          MailingAddress.add("name");
          MailingAddress.add("phone");
          MailingAddress.add("province");
          MailingAddress.add("provinceCode");
          MailingAddress.add("zip");
        });
      });
    });
    root.add("deliveryGroups", {
      args: {
        first: 10
      }
    }, function (deliveryGroups) {
      deliveryGroups.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      deliveryGroups.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("id");
          node.add("deliveryAddress", function (deliveryAddress) {
            deliveryAddress.add("address2");
            deliveryAddress.add("address1");
            deliveryAddress.add("city");
            deliveryAddress.add("company");
            deliveryAddress.add("country");
            deliveryAddress.add("countryCodeV2");
            deliveryAddress.add("firstName");
            deliveryAddress.add("formatted");
            deliveryAddress.add("formattedArea");
            deliveryAddress.add("lastName");
            deliveryAddress.add("latitude");
            deliveryAddress.add("longitude");
            deliveryAddress.add("name");
            deliveryAddress.add("phone");
            deliveryAddress.add("province");
            deliveryAddress.add("provinceCode");
          });
          node.add("deliveryOptions", function (deliveryOptions) {
            deliveryOptions.add("code");
            deliveryOptions.add("deliveryMethodType");
            deliveryOptions.add("description");
            deliveryOptions.add("estimatedCost", function (estimatedCost) {
              estimatedCost.add("amount");
              estimatedCost.add("currencyCode");
            });
            deliveryOptions.add("handle");
            deliveryOptions.add("title");
          });
          node.add("selectedDeliveryOption", function (selectedDeliveryOption) {
            selectedDeliveryOption.add("code");
            selectedDeliveryOption.add("deliveryMethodType");
            selectedDeliveryOption.add("description");
            selectedDeliveryOption.add("estimatedCost", function (estimatedCost) {
              estimatedCost.add("amount");
              estimatedCost.add("currencyCode");
            });
            selectedDeliveryOption.add("handle");
            selectedDeliveryOption.add("title");
          });
          node.add("cartLines", {
            args: {
              first: 250
            }
          }, function (cartLines) {
            cartLines.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            cartLines.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("id");
              });
            });
          });
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("note");
  });
  spreads.CartUserErrorFragment = document.defineFragment("CartUserErrorFragment", "CartUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.CartWarningFragment = document.defineFragment("CartWarningFragment", "CartWarning", function (root) {
    root.add("code");
    root.add("message");
  });
  document.addMutation("CartLinesAdd", [variables.CartLinesAdd.cartId, variables.CartLinesAdd.lines], function (root) {
    root.add("cartLinesAdd", {
      args: {
        cartId: variables.CartLinesAdd.cartId,
        lines: variables.CartLinesAdd.lines
      }
    }, function (cartLinesAdd) {
      cartLinesAdd.add("cart", function (cart) {
        cart.addFragment(spreads.CartFragment);
      });
      cartLinesAdd.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.CartUserErrorFragment);
      });
      cartLinesAdd.add("warnings", function (warnings) {
        warnings.addFragment(spreads.CartWarningFragment);
      });
    });
  }, client.internationalizationDirective);
  return document;
}

function query$20(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.CartLinesRemove = {};
  variables.CartLinesRemove.cartId = client.variable("cartId", "ID!");
  variables.CartLinesRemove.lineIds = client.variable("lineIds", "[ID!]!");
  spreads.CartLineFragment = document.defineFragment("CartLineFragment", "BaseCartLine", function (root) {
    root.add("id");
    root.add("merchandise", function (merchandise) {
      merchandise.addInlineFragmentOn("ProductVariant", function (ProductVariant) {
        ProductVariant.add("id");
        ProductVariant.add("title");
        ProductVariant.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        ProductVariant.add("product", function (product) {
          product.add("id");
          product.add("handle");
          product.add("title");
        });
        ProductVariant.add("weight");
        ProductVariant.add("availableForSale", {
          alias: "available"
        });
        ProductVariant.add("sku");
        ProductVariant.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        ProductVariant.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        ProductVariant.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        ProductVariant.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        ProductVariant.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
    });
    root.add("quantity");
    root.add("attributes", function (attributes) {
      attributes.add("key");
      attributes.add("value");
    });
    root.add("cost", function (cost) {
      cost.add("totalAmount", function (totalAmount) {
        totalAmount.add("amount");
        totalAmount.add("currencyCode");
      });
      cost.add("subtotalAmount", function (subtotalAmount) {
        subtotalAmount.add("amount");
        subtotalAmount.add("currencyCode");
      });
      cost.add("amountPerQuantity", function (amountPerQuantity) {
        amountPerQuantity.add("amount");
        amountPerQuantity.add("currencyCode");
      });
      cost.add("compareAtAmountPerQuantity", function (compareAtAmountPerQuantity) {
        compareAtAmountPerQuantity.add("amount");
        compareAtAmountPerQuantity.add("currencyCode");
      });
    });
    root.add("discountAllocations", function (discountAllocations) {
      discountAllocations.add("discountedAmount", function (discountedAmount) {
        discountedAmount.add("amount");
        discountedAmount.add("currencyCode");
      });
      discountAllocations.add("discountApplication", function (discountApplication) {
        discountApplication.add("targetType");
        discountApplication.add("allocationMethod");
        discountApplication.add("targetSelection");
        discountApplication.add("value", function (value) {
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
        });
      });
      discountAllocations.addInlineFragmentOn("CartCodeDiscountAllocation", function (CartCodeDiscountAllocation) {
        CartCodeDiscountAllocation.add("code");
      });
      discountAllocations.addInlineFragmentOn("CartAutomaticDiscountAllocation", function (CartAutomaticDiscountAllocation) {
        CartAutomaticDiscountAllocation.add("title");
      });
      discountAllocations.addInlineFragmentOn("CartCustomDiscountAllocation", function (CartCustomDiscountAllocation) {
        CartCustomDiscountAllocation.add("title");
      });
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsed", function (amountUsed) {
      amountUsed.add("amount");
      amountUsed.add("currencyCode");
    });
    root.add("amountUsed", {
      alias: "amountUsedV2"
    }, function (amountUsed) {
      amountUsed.add("amount");
      amountUsed.add("currencyCode");
    });
    root.add("balance", function (balance) {
      balance.add("amount");
      balance.add("currencyCode");
    });
    root.add("balance", {
      alias: "balanceV2"
    }, function (balance) {
      balance.add("amount");
      balance.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.CartFragment = document.defineFragment("CartFragment", "Cart", function (root) {
    root.add("id");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("lines", {
      args: {
        first: 250
      }
    }, function (lines) {
      lines.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lines.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.CartLineFragment);
        });
      });
    });
    root.add("attributes", function (attributes) {
      attributes.add("key");
      attributes.add("value");
    });
    root.add("cost", function (cost) {
      cost.add("checkoutChargeAmount", function (checkoutChargeAmount) {
        checkoutChargeAmount.add("amount");
        checkoutChargeAmount.add("currencyCode");
      });
      cost.add("totalAmount", function (totalAmount) {
        totalAmount.add("amount");
        totalAmount.add("currencyCode");
      });
      cost.add("subtotalAmount", function (subtotalAmount) {
        subtotalAmount.add("amount");
        subtotalAmount.add("currencyCode");
      });
      cost.add("totalTaxAmount", function (totalTaxAmount) {
        totalTaxAmount.add("amount");
        totalTaxAmount.add("currencyCode");
      });
      cost.add("totalDutyAmount", function (totalDutyAmount) {
        totalDutyAmount.add("amount");
        totalDutyAmount.add("currencyCode");
      });
    });
    root.add("checkoutUrl");
    root.add("discountCodes", function (discountCodes) {
      discountCodes.add("applicable");
      discountCodes.add("code");
    });
    root.add("discountAllocations", function (discountAllocations) {
      discountAllocations.add("discountedAmount", function (discountedAmount) {
        discountedAmount.add("amount");
        discountedAmount.add("currencyCode");
      });
      discountAllocations.add("discountApplication", function (discountApplication) {
        discountApplication.add("targetType");
        discountApplication.add("allocationMethod");
        discountApplication.add("targetSelection");
        discountApplication.add("value", function (value) {
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
        });
      });
      discountAllocations.addInlineFragmentOn("CartCodeDiscountAllocation", function (CartCodeDiscountAllocation) {
        CartCodeDiscountAllocation.add("code");
      });
      discountAllocations.addInlineFragmentOn("CartAutomaticDiscountAllocation", function (CartAutomaticDiscountAllocation) {
        CartAutomaticDiscountAllocation.add("title");
      });
      discountAllocations.addInlineFragmentOn("CartCustomDiscountAllocation", function (CartCustomDiscountAllocation) {
        CartCustomDiscountAllocation.add("title");
      });
    });
    root.add("buyerIdentity", function (buyerIdentity) {
      buyerIdentity.add("countryCode");
      buyerIdentity.add("preferences", function (preferences) {
        preferences.add("delivery", function (delivery) {
          delivery.add("coordinates", function (coordinates) {
            coordinates.add("latitude");
            coordinates.add("longitude");
            coordinates.add("countryCode");
          });
          delivery.add("deliveryMethod");
          delivery.add("pickupHandle");
        });
        preferences.add("wallet");
      });
      buyerIdentity.add("email");
      buyerIdentity.add("phone");
      buyerIdentity.add("customer", function (customer) {
        customer.add("email");
      });
      buyerIdentity.add("deliveryAddressPreferences", function (deliveryAddressPreferences) {
        deliveryAddressPreferences.addInlineFragmentOn("MailingAddress", function (MailingAddress) {
          MailingAddress.add("address1");
          MailingAddress.add("address2");
          MailingAddress.add("city");
          MailingAddress.add("company");
          MailingAddress.add("country");
          MailingAddress.add("countryCodeV2");
          MailingAddress.add("firstName");
          MailingAddress.add("formatted");
          MailingAddress.add("formattedArea");
          MailingAddress.add("lastName");
          MailingAddress.add("latitude");
          MailingAddress.add("longitude");
          MailingAddress.add("name");
          MailingAddress.add("phone");
          MailingAddress.add("province");
          MailingAddress.add("provinceCode");
          MailingAddress.add("zip");
        });
      });
    });
    root.add("deliveryGroups", {
      args: {
        first: 10
      }
    }, function (deliveryGroups) {
      deliveryGroups.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      deliveryGroups.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("id");
          node.add("deliveryAddress", function (deliveryAddress) {
            deliveryAddress.add("address2");
            deliveryAddress.add("address1");
            deliveryAddress.add("city");
            deliveryAddress.add("company");
            deliveryAddress.add("country");
            deliveryAddress.add("countryCodeV2");
            deliveryAddress.add("firstName");
            deliveryAddress.add("formatted");
            deliveryAddress.add("formattedArea");
            deliveryAddress.add("lastName");
            deliveryAddress.add("latitude");
            deliveryAddress.add("longitude");
            deliveryAddress.add("name");
            deliveryAddress.add("phone");
            deliveryAddress.add("province");
            deliveryAddress.add("provinceCode");
          });
          node.add("deliveryOptions", function (deliveryOptions) {
            deliveryOptions.add("code");
            deliveryOptions.add("deliveryMethodType");
            deliveryOptions.add("description");
            deliveryOptions.add("estimatedCost", function (estimatedCost) {
              estimatedCost.add("amount");
              estimatedCost.add("currencyCode");
            });
            deliveryOptions.add("handle");
            deliveryOptions.add("title");
          });
          node.add("selectedDeliveryOption", function (selectedDeliveryOption) {
            selectedDeliveryOption.add("code");
            selectedDeliveryOption.add("deliveryMethodType");
            selectedDeliveryOption.add("description");
            selectedDeliveryOption.add("estimatedCost", function (estimatedCost) {
              estimatedCost.add("amount");
              estimatedCost.add("currencyCode");
            });
            selectedDeliveryOption.add("handle");
            selectedDeliveryOption.add("title");
          });
          node.add("cartLines", {
            args: {
              first: 250
            }
          }, function (cartLines) {
            cartLines.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            cartLines.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("id");
              });
            });
          });
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("note");
  });
  spreads.CartUserErrorFragment = document.defineFragment("CartUserErrorFragment", "CartUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.CartWarningFragment = document.defineFragment("CartWarningFragment", "CartWarning", function (root) {
    root.add("code");
    root.add("message");
  });
  document.addMutation("CartLinesRemove", [variables.CartLinesRemove.cartId, variables.CartLinesRemove.lineIds], function (root) {
    root.add("cartLinesRemove", {
      args: {
        cartId: variables.CartLinesRemove.cartId,
        lineIds: variables.CartLinesRemove.lineIds
      }
    }, function (cartLinesRemove) {
      cartLinesRemove.add("cart", function (cart) {
        cart.addFragment(spreads.CartFragment);
      });
      cartLinesRemove.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.CartUserErrorFragment);
      });
      cartLinesRemove.add("warnings", function (warnings) {
        warnings.addFragment(spreads.CartWarningFragment);
      });
    });
  }, client.internationalizationDirective);
  return document;
}

function query$21(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.CartLinesUpdate = {};
  variables.CartLinesUpdate.cartId = client.variable("cartId", "ID!");
  variables.CartLinesUpdate.lines = client.variable("lines", "[CartLineUpdateInput!]!");
  spreads.CartLineFragment = document.defineFragment("CartLineFragment", "BaseCartLine", function (root) {
    root.add("id");
    root.add("merchandise", function (merchandise) {
      merchandise.addInlineFragmentOn("ProductVariant", function (ProductVariant) {
        ProductVariant.add("id");
        ProductVariant.add("title");
        ProductVariant.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        ProductVariant.add("product", function (product) {
          product.add("id");
          product.add("handle");
          product.add("title");
        });
        ProductVariant.add("weight");
        ProductVariant.add("availableForSale", {
          alias: "available"
        });
        ProductVariant.add("sku");
        ProductVariant.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        ProductVariant.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        ProductVariant.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        ProductVariant.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        ProductVariant.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
    });
    root.add("quantity");
    root.add("attributes", function (attributes) {
      attributes.add("key");
      attributes.add("value");
    });
    root.add("cost", function (cost) {
      cost.add("totalAmount", function (totalAmount) {
        totalAmount.add("amount");
        totalAmount.add("currencyCode");
      });
      cost.add("subtotalAmount", function (subtotalAmount) {
        subtotalAmount.add("amount");
        subtotalAmount.add("currencyCode");
      });
      cost.add("amountPerQuantity", function (amountPerQuantity) {
        amountPerQuantity.add("amount");
        amountPerQuantity.add("currencyCode");
      });
      cost.add("compareAtAmountPerQuantity", function (compareAtAmountPerQuantity) {
        compareAtAmountPerQuantity.add("amount");
        compareAtAmountPerQuantity.add("currencyCode");
      });
    });
    root.add("discountAllocations", function (discountAllocations) {
      discountAllocations.add("discountedAmount", function (discountedAmount) {
        discountedAmount.add("amount");
        discountedAmount.add("currencyCode");
      });
      discountAllocations.add("discountApplication", function (discountApplication) {
        discountApplication.add("targetType");
        discountApplication.add("allocationMethod");
        discountApplication.add("targetSelection");
        discountApplication.add("value", function (value) {
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
        });
      });
      discountAllocations.addInlineFragmentOn("CartCodeDiscountAllocation", function (CartCodeDiscountAllocation) {
        CartCodeDiscountAllocation.add("code");
      });
      discountAllocations.addInlineFragmentOn("CartAutomaticDiscountAllocation", function (CartAutomaticDiscountAllocation) {
        CartAutomaticDiscountAllocation.add("title");
      });
      discountAllocations.addInlineFragmentOn("CartCustomDiscountAllocation", function (CartCustomDiscountAllocation) {
        CartCustomDiscountAllocation.add("title");
      });
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsed", function (amountUsed) {
      amountUsed.add("amount");
      amountUsed.add("currencyCode");
    });
    root.add("amountUsed", {
      alias: "amountUsedV2"
    }, function (amountUsed) {
      amountUsed.add("amount");
      amountUsed.add("currencyCode");
    });
    root.add("balance", function (balance) {
      balance.add("amount");
      balance.add("currencyCode");
    });
    root.add("balance", {
      alias: "balanceV2"
    }, function (balance) {
      balance.add("amount");
      balance.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.CartFragment = document.defineFragment("CartFragment", "Cart", function (root) {
    root.add("id");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("lines", {
      args: {
        first: 250
      }
    }, function (lines) {
      lines.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lines.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.CartLineFragment);
        });
      });
    });
    root.add("attributes", function (attributes) {
      attributes.add("key");
      attributes.add("value");
    });
    root.add("cost", function (cost) {
      cost.add("checkoutChargeAmount", function (checkoutChargeAmount) {
        checkoutChargeAmount.add("amount");
        checkoutChargeAmount.add("currencyCode");
      });
      cost.add("totalAmount", function (totalAmount) {
        totalAmount.add("amount");
        totalAmount.add("currencyCode");
      });
      cost.add("subtotalAmount", function (subtotalAmount) {
        subtotalAmount.add("amount");
        subtotalAmount.add("currencyCode");
      });
      cost.add("totalTaxAmount", function (totalTaxAmount) {
        totalTaxAmount.add("amount");
        totalTaxAmount.add("currencyCode");
      });
      cost.add("totalDutyAmount", function (totalDutyAmount) {
        totalDutyAmount.add("amount");
        totalDutyAmount.add("currencyCode");
      });
    });
    root.add("checkoutUrl");
    root.add("discountCodes", function (discountCodes) {
      discountCodes.add("applicable");
      discountCodes.add("code");
    });
    root.add("discountAllocations", function (discountAllocations) {
      discountAllocations.add("discountedAmount", function (discountedAmount) {
        discountedAmount.add("amount");
        discountedAmount.add("currencyCode");
      });
      discountAllocations.add("discountApplication", function (discountApplication) {
        discountApplication.add("targetType");
        discountApplication.add("allocationMethod");
        discountApplication.add("targetSelection");
        discountApplication.add("value", function (value) {
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
        });
      });
      discountAllocations.addInlineFragmentOn("CartCodeDiscountAllocation", function (CartCodeDiscountAllocation) {
        CartCodeDiscountAllocation.add("code");
      });
      discountAllocations.addInlineFragmentOn("CartAutomaticDiscountAllocation", function (CartAutomaticDiscountAllocation) {
        CartAutomaticDiscountAllocation.add("title");
      });
      discountAllocations.addInlineFragmentOn("CartCustomDiscountAllocation", function (CartCustomDiscountAllocation) {
        CartCustomDiscountAllocation.add("title");
      });
    });
    root.add("buyerIdentity", function (buyerIdentity) {
      buyerIdentity.add("countryCode");
      buyerIdentity.add("preferences", function (preferences) {
        preferences.add("delivery", function (delivery) {
          delivery.add("coordinates", function (coordinates) {
            coordinates.add("latitude");
            coordinates.add("longitude");
            coordinates.add("countryCode");
          });
          delivery.add("deliveryMethod");
          delivery.add("pickupHandle");
        });
        preferences.add("wallet");
      });
      buyerIdentity.add("email");
      buyerIdentity.add("phone");
      buyerIdentity.add("customer", function (customer) {
        customer.add("email");
      });
      buyerIdentity.add("deliveryAddressPreferences", function (deliveryAddressPreferences) {
        deliveryAddressPreferences.addInlineFragmentOn("MailingAddress", function (MailingAddress) {
          MailingAddress.add("address1");
          MailingAddress.add("address2");
          MailingAddress.add("city");
          MailingAddress.add("company");
          MailingAddress.add("country");
          MailingAddress.add("countryCodeV2");
          MailingAddress.add("firstName");
          MailingAddress.add("formatted");
          MailingAddress.add("formattedArea");
          MailingAddress.add("lastName");
          MailingAddress.add("latitude");
          MailingAddress.add("longitude");
          MailingAddress.add("name");
          MailingAddress.add("phone");
          MailingAddress.add("province");
          MailingAddress.add("provinceCode");
          MailingAddress.add("zip");
        });
      });
    });
    root.add("deliveryGroups", {
      args: {
        first: 10
      }
    }, function (deliveryGroups) {
      deliveryGroups.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      deliveryGroups.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("id");
          node.add("deliveryAddress", function (deliveryAddress) {
            deliveryAddress.add("address2");
            deliveryAddress.add("address1");
            deliveryAddress.add("city");
            deliveryAddress.add("company");
            deliveryAddress.add("country");
            deliveryAddress.add("countryCodeV2");
            deliveryAddress.add("firstName");
            deliveryAddress.add("formatted");
            deliveryAddress.add("formattedArea");
            deliveryAddress.add("lastName");
            deliveryAddress.add("latitude");
            deliveryAddress.add("longitude");
            deliveryAddress.add("name");
            deliveryAddress.add("phone");
            deliveryAddress.add("province");
            deliveryAddress.add("provinceCode");
          });
          node.add("deliveryOptions", function (deliveryOptions) {
            deliveryOptions.add("code");
            deliveryOptions.add("deliveryMethodType");
            deliveryOptions.add("description");
            deliveryOptions.add("estimatedCost", function (estimatedCost) {
              estimatedCost.add("amount");
              estimatedCost.add("currencyCode");
            });
            deliveryOptions.add("handle");
            deliveryOptions.add("title");
          });
          node.add("selectedDeliveryOption", function (selectedDeliveryOption) {
            selectedDeliveryOption.add("code");
            selectedDeliveryOption.add("deliveryMethodType");
            selectedDeliveryOption.add("description");
            selectedDeliveryOption.add("estimatedCost", function (estimatedCost) {
              estimatedCost.add("amount");
              estimatedCost.add("currencyCode");
            });
            selectedDeliveryOption.add("handle");
            selectedDeliveryOption.add("title");
          });
          node.add("cartLines", {
            args: {
              first: 250
            }
          }, function (cartLines) {
            cartLines.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            cartLines.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("id");
              });
            });
          });
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("note");
  });
  spreads.CartUserErrorFragment = document.defineFragment("CartUserErrorFragment", "CartUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.CartWarningFragment = document.defineFragment("CartWarningFragment", "CartWarning", function (root) {
    root.add("code");
    root.add("message");
  });
  document.addMutation("CartLinesUpdate", [variables.CartLinesUpdate.cartId, variables.CartLinesUpdate.lines], function (root) {
    root.add("cartLinesUpdate", {
      args: {
        cartId: variables.CartLinesUpdate.cartId,
        lines: variables.CartLinesUpdate.lines
      }
    }, function (cartLinesUpdate) {
      cartLinesUpdate.add("cart", function (cart) {
        cart.addFragment(spreads.CartFragment);
      });
      cartLinesUpdate.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.CartUserErrorFragment);
      });
      cartLinesUpdate.add("warnings", function (warnings) {
        warnings.addFragment(spreads.CartWarningFragment);
      });
    });
  }, client.internationalizationDirective);
  return document;
}

function query$22(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.CartNoteUpdate = {};
  variables.CartNoteUpdate.cartId = client.variable("cartId", "ID!");
  variables.CartNoteUpdate.note = client.variable("note", "String!");
  spreads.CartLineFragment = document.defineFragment("CartLineFragment", "BaseCartLine", function (root) {
    root.add("id");
    root.add("merchandise", function (merchandise) {
      merchandise.addInlineFragmentOn("ProductVariant", function (ProductVariant) {
        ProductVariant.add("id");
        ProductVariant.add("title");
        ProductVariant.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        ProductVariant.add("product", function (product) {
          product.add("id");
          product.add("handle");
          product.add("title");
        });
        ProductVariant.add("weight");
        ProductVariant.add("availableForSale", {
          alias: "available"
        });
        ProductVariant.add("sku");
        ProductVariant.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        ProductVariant.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        ProductVariant.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        ProductVariant.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        ProductVariant.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
    });
    root.add("quantity");
    root.add("attributes", function (attributes) {
      attributes.add("key");
      attributes.add("value");
    });
    root.add("cost", function (cost) {
      cost.add("totalAmount", function (totalAmount) {
        totalAmount.add("amount");
        totalAmount.add("currencyCode");
      });
      cost.add("subtotalAmount", function (subtotalAmount) {
        subtotalAmount.add("amount");
        subtotalAmount.add("currencyCode");
      });
      cost.add("amountPerQuantity", function (amountPerQuantity) {
        amountPerQuantity.add("amount");
        amountPerQuantity.add("currencyCode");
      });
      cost.add("compareAtAmountPerQuantity", function (compareAtAmountPerQuantity) {
        compareAtAmountPerQuantity.add("amount");
        compareAtAmountPerQuantity.add("currencyCode");
      });
    });
    root.add("discountAllocations", function (discountAllocations) {
      discountAllocations.add("discountedAmount", function (discountedAmount) {
        discountedAmount.add("amount");
        discountedAmount.add("currencyCode");
      });
      discountAllocations.add("discountApplication", function (discountApplication) {
        discountApplication.add("targetType");
        discountApplication.add("allocationMethod");
        discountApplication.add("targetSelection");
        discountApplication.add("value", function (value) {
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
        });
      });
      discountAllocations.addInlineFragmentOn("CartCodeDiscountAllocation", function (CartCodeDiscountAllocation) {
        CartCodeDiscountAllocation.add("code");
      });
      discountAllocations.addInlineFragmentOn("CartAutomaticDiscountAllocation", function (CartAutomaticDiscountAllocation) {
        CartAutomaticDiscountAllocation.add("title");
      });
      discountAllocations.addInlineFragmentOn("CartCustomDiscountAllocation", function (CartCustomDiscountAllocation) {
        CartCustomDiscountAllocation.add("title");
      });
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsed", function (amountUsed) {
      amountUsed.add("amount");
      amountUsed.add("currencyCode");
    });
    root.add("amountUsed", {
      alias: "amountUsedV2"
    }, function (amountUsed) {
      amountUsed.add("amount");
      amountUsed.add("currencyCode");
    });
    root.add("balance", function (balance) {
      balance.add("amount");
      balance.add("currencyCode");
    });
    root.add("balance", {
      alias: "balanceV2"
    }, function (balance) {
      balance.add("amount");
      balance.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.CartFragment = document.defineFragment("CartFragment", "Cart", function (root) {
    root.add("id");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("lines", {
      args: {
        first: 250
      }
    }, function (lines) {
      lines.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lines.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.CartLineFragment);
        });
      });
    });
    root.add("attributes", function (attributes) {
      attributes.add("key");
      attributes.add("value");
    });
    root.add("cost", function (cost) {
      cost.add("checkoutChargeAmount", function (checkoutChargeAmount) {
        checkoutChargeAmount.add("amount");
        checkoutChargeAmount.add("currencyCode");
      });
      cost.add("totalAmount", function (totalAmount) {
        totalAmount.add("amount");
        totalAmount.add("currencyCode");
      });
      cost.add("subtotalAmount", function (subtotalAmount) {
        subtotalAmount.add("amount");
        subtotalAmount.add("currencyCode");
      });
      cost.add("totalTaxAmount", function (totalTaxAmount) {
        totalTaxAmount.add("amount");
        totalTaxAmount.add("currencyCode");
      });
      cost.add("totalDutyAmount", function (totalDutyAmount) {
        totalDutyAmount.add("amount");
        totalDutyAmount.add("currencyCode");
      });
    });
    root.add("checkoutUrl");
    root.add("discountCodes", function (discountCodes) {
      discountCodes.add("applicable");
      discountCodes.add("code");
    });
    root.add("discountAllocations", function (discountAllocations) {
      discountAllocations.add("discountedAmount", function (discountedAmount) {
        discountedAmount.add("amount");
        discountedAmount.add("currencyCode");
      });
      discountAllocations.add("discountApplication", function (discountApplication) {
        discountApplication.add("targetType");
        discountApplication.add("allocationMethod");
        discountApplication.add("targetSelection");
        discountApplication.add("value", function (value) {
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
        });
      });
      discountAllocations.addInlineFragmentOn("CartCodeDiscountAllocation", function (CartCodeDiscountAllocation) {
        CartCodeDiscountAllocation.add("code");
      });
      discountAllocations.addInlineFragmentOn("CartAutomaticDiscountAllocation", function (CartAutomaticDiscountAllocation) {
        CartAutomaticDiscountAllocation.add("title");
      });
      discountAllocations.addInlineFragmentOn("CartCustomDiscountAllocation", function (CartCustomDiscountAllocation) {
        CartCustomDiscountAllocation.add("title");
      });
    });
    root.add("buyerIdentity", function (buyerIdentity) {
      buyerIdentity.add("countryCode");
      buyerIdentity.add("preferences", function (preferences) {
        preferences.add("delivery", function (delivery) {
          delivery.add("coordinates", function (coordinates) {
            coordinates.add("latitude");
            coordinates.add("longitude");
            coordinates.add("countryCode");
          });
          delivery.add("deliveryMethod");
          delivery.add("pickupHandle");
        });
        preferences.add("wallet");
      });
      buyerIdentity.add("email");
      buyerIdentity.add("phone");
      buyerIdentity.add("customer", function (customer) {
        customer.add("email");
      });
      buyerIdentity.add("deliveryAddressPreferences", function (deliveryAddressPreferences) {
        deliveryAddressPreferences.addInlineFragmentOn("MailingAddress", function (MailingAddress) {
          MailingAddress.add("address1");
          MailingAddress.add("address2");
          MailingAddress.add("city");
          MailingAddress.add("company");
          MailingAddress.add("country");
          MailingAddress.add("countryCodeV2");
          MailingAddress.add("firstName");
          MailingAddress.add("formatted");
          MailingAddress.add("formattedArea");
          MailingAddress.add("lastName");
          MailingAddress.add("latitude");
          MailingAddress.add("longitude");
          MailingAddress.add("name");
          MailingAddress.add("phone");
          MailingAddress.add("province");
          MailingAddress.add("provinceCode");
          MailingAddress.add("zip");
        });
      });
    });
    root.add("deliveryGroups", {
      args: {
        first: 10
      }
    }, function (deliveryGroups) {
      deliveryGroups.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      deliveryGroups.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("id");
          node.add("deliveryAddress", function (deliveryAddress) {
            deliveryAddress.add("address2");
            deliveryAddress.add("address1");
            deliveryAddress.add("city");
            deliveryAddress.add("company");
            deliveryAddress.add("country");
            deliveryAddress.add("countryCodeV2");
            deliveryAddress.add("firstName");
            deliveryAddress.add("formatted");
            deliveryAddress.add("formattedArea");
            deliveryAddress.add("lastName");
            deliveryAddress.add("latitude");
            deliveryAddress.add("longitude");
            deliveryAddress.add("name");
            deliveryAddress.add("phone");
            deliveryAddress.add("province");
            deliveryAddress.add("provinceCode");
          });
          node.add("deliveryOptions", function (deliveryOptions) {
            deliveryOptions.add("code");
            deliveryOptions.add("deliveryMethodType");
            deliveryOptions.add("description");
            deliveryOptions.add("estimatedCost", function (estimatedCost) {
              estimatedCost.add("amount");
              estimatedCost.add("currencyCode");
            });
            deliveryOptions.add("handle");
            deliveryOptions.add("title");
          });
          node.add("selectedDeliveryOption", function (selectedDeliveryOption) {
            selectedDeliveryOption.add("code");
            selectedDeliveryOption.add("deliveryMethodType");
            selectedDeliveryOption.add("description");
            selectedDeliveryOption.add("estimatedCost", function (estimatedCost) {
              estimatedCost.add("amount");
              estimatedCost.add("currencyCode");
            });
            selectedDeliveryOption.add("handle");
            selectedDeliveryOption.add("title");
          });
          node.add("cartLines", {
            args: {
              first: 250
            }
          }, function (cartLines) {
            cartLines.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            cartLines.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("id");
              });
            });
          });
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("note");
  });
  document.addMutation("CartNoteUpdate", [variables.CartNoteUpdate.cartId, variables.CartNoteUpdate.note], function (root) {
    root.add("cartNoteUpdate", {
      args: {
        cartId: variables.CartNoteUpdate.cartId,
        note: variables.CartNoteUpdate.note
      }
    }, function (cartNoteUpdate) {
      cartNoteUpdate.add("cart", function (cart) {
        cart.addFragment(spreads.CartFragment);
      });
      cartNoteUpdate.add("userErrors", function (userErrors) {
        userErrors.add("field");
        userErrors.add("message");
        userErrors.add("code");
      });
    });
  }, client.internationalizationDirective);
  return document;
}

function query$23(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.CartGiftCardCodesRemove = {};
  variables.CartGiftCardCodesRemove.appliedGiftCardIds = client.variable("appliedGiftCardIds", "[ID!]!");
  variables.CartGiftCardCodesRemove.cartId = client.variable("cartId", "ID!");
  spreads.CartLineFragment = document.defineFragment("CartLineFragment", "BaseCartLine", function (root) {
    root.add("id");
    root.add("merchandise", function (merchandise) {
      merchandise.addInlineFragmentOn("ProductVariant", function (ProductVariant) {
        ProductVariant.add("id");
        ProductVariant.add("title");
        ProductVariant.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        ProductVariant.add("product", function (product) {
          product.add("id");
          product.add("handle");
          product.add("title");
        });
        ProductVariant.add("weight");
        ProductVariant.add("availableForSale", {
          alias: "available"
        });
        ProductVariant.add("sku");
        ProductVariant.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        ProductVariant.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        ProductVariant.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        ProductVariant.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        ProductVariant.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
    });
    root.add("quantity");
    root.add("attributes", function (attributes) {
      attributes.add("key");
      attributes.add("value");
    });
    root.add("cost", function (cost) {
      cost.add("totalAmount", function (totalAmount) {
        totalAmount.add("amount");
        totalAmount.add("currencyCode");
      });
      cost.add("subtotalAmount", function (subtotalAmount) {
        subtotalAmount.add("amount");
        subtotalAmount.add("currencyCode");
      });
      cost.add("amountPerQuantity", function (amountPerQuantity) {
        amountPerQuantity.add("amount");
        amountPerQuantity.add("currencyCode");
      });
      cost.add("compareAtAmountPerQuantity", function (compareAtAmountPerQuantity) {
        compareAtAmountPerQuantity.add("amount");
        compareAtAmountPerQuantity.add("currencyCode");
      });
    });
    root.add("discountAllocations", function (discountAllocations) {
      discountAllocations.add("discountedAmount", function (discountedAmount) {
        discountedAmount.add("amount");
        discountedAmount.add("currencyCode");
      });
      discountAllocations.add("discountApplication", function (discountApplication) {
        discountApplication.add("targetType");
        discountApplication.add("allocationMethod");
        discountApplication.add("targetSelection");
        discountApplication.add("value", function (value) {
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
        });
      });
      discountAllocations.addInlineFragmentOn("CartCodeDiscountAllocation", function (CartCodeDiscountAllocation) {
        CartCodeDiscountAllocation.add("code");
      });
      discountAllocations.addInlineFragmentOn("CartAutomaticDiscountAllocation", function (CartAutomaticDiscountAllocation) {
        CartAutomaticDiscountAllocation.add("title");
      });
      discountAllocations.addInlineFragmentOn("CartCustomDiscountAllocation", function (CartCustomDiscountAllocation) {
        CartCustomDiscountAllocation.add("title");
      });
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsed", function (amountUsed) {
      amountUsed.add("amount");
      amountUsed.add("currencyCode");
    });
    root.add("amountUsed", {
      alias: "amountUsedV2"
    }, function (amountUsed) {
      amountUsed.add("amount");
      amountUsed.add("currencyCode");
    });
    root.add("balance", function (balance) {
      balance.add("amount");
      balance.add("currencyCode");
    });
    root.add("balance", {
      alias: "balanceV2"
    }, function (balance) {
      balance.add("amount");
      balance.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.CartFragment = document.defineFragment("CartFragment", "Cart", function (root) {
    root.add("id");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("lines", {
      args: {
        first: 250
      }
    }, function (lines) {
      lines.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lines.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.CartLineFragment);
        });
      });
    });
    root.add("attributes", function (attributes) {
      attributes.add("key");
      attributes.add("value");
    });
    root.add("cost", function (cost) {
      cost.add("checkoutChargeAmount", function (checkoutChargeAmount) {
        checkoutChargeAmount.add("amount");
        checkoutChargeAmount.add("currencyCode");
      });
      cost.add("totalAmount", function (totalAmount) {
        totalAmount.add("amount");
        totalAmount.add("currencyCode");
      });
      cost.add("subtotalAmount", function (subtotalAmount) {
        subtotalAmount.add("amount");
        subtotalAmount.add("currencyCode");
      });
      cost.add("totalTaxAmount", function (totalTaxAmount) {
        totalTaxAmount.add("amount");
        totalTaxAmount.add("currencyCode");
      });
      cost.add("totalDutyAmount", function (totalDutyAmount) {
        totalDutyAmount.add("amount");
        totalDutyAmount.add("currencyCode");
      });
    });
    root.add("checkoutUrl");
    root.add("discountCodes", function (discountCodes) {
      discountCodes.add("applicable");
      discountCodes.add("code");
    });
    root.add("discountAllocations", function (discountAllocations) {
      discountAllocations.add("discountedAmount", function (discountedAmount) {
        discountedAmount.add("amount");
        discountedAmount.add("currencyCode");
      });
      discountAllocations.add("discountApplication", function (discountApplication) {
        discountApplication.add("targetType");
        discountApplication.add("allocationMethod");
        discountApplication.add("targetSelection");
        discountApplication.add("value", function (value) {
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
        });
      });
      discountAllocations.addInlineFragmentOn("CartCodeDiscountAllocation", function (CartCodeDiscountAllocation) {
        CartCodeDiscountAllocation.add("code");
      });
      discountAllocations.addInlineFragmentOn("CartAutomaticDiscountAllocation", function (CartAutomaticDiscountAllocation) {
        CartAutomaticDiscountAllocation.add("title");
      });
      discountAllocations.addInlineFragmentOn("CartCustomDiscountAllocation", function (CartCustomDiscountAllocation) {
        CartCustomDiscountAllocation.add("title");
      });
    });
    root.add("buyerIdentity", function (buyerIdentity) {
      buyerIdentity.add("countryCode");
      buyerIdentity.add("preferences", function (preferences) {
        preferences.add("delivery", function (delivery) {
          delivery.add("coordinates", function (coordinates) {
            coordinates.add("latitude");
            coordinates.add("longitude");
            coordinates.add("countryCode");
          });
          delivery.add("deliveryMethod");
          delivery.add("pickupHandle");
        });
        preferences.add("wallet");
      });
      buyerIdentity.add("email");
      buyerIdentity.add("phone");
      buyerIdentity.add("customer", function (customer) {
        customer.add("email");
      });
      buyerIdentity.add("deliveryAddressPreferences", function (deliveryAddressPreferences) {
        deliveryAddressPreferences.addInlineFragmentOn("MailingAddress", function (MailingAddress) {
          MailingAddress.add("address1");
          MailingAddress.add("address2");
          MailingAddress.add("city");
          MailingAddress.add("company");
          MailingAddress.add("country");
          MailingAddress.add("countryCodeV2");
          MailingAddress.add("firstName");
          MailingAddress.add("formatted");
          MailingAddress.add("formattedArea");
          MailingAddress.add("lastName");
          MailingAddress.add("latitude");
          MailingAddress.add("longitude");
          MailingAddress.add("name");
          MailingAddress.add("phone");
          MailingAddress.add("province");
          MailingAddress.add("provinceCode");
          MailingAddress.add("zip");
        });
      });
    });
    root.add("deliveryGroups", {
      args: {
        first: 10
      }
    }, function (deliveryGroups) {
      deliveryGroups.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      deliveryGroups.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("id");
          node.add("deliveryAddress", function (deliveryAddress) {
            deliveryAddress.add("address2");
            deliveryAddress.add("address1");
            deliveryAddress.add("city");
            deliveryAddress.add("company");
            deliveryAddress.add("country");
            deliveryAddress.add("countryCodeV2");
            deliveryAddress.add("firstName");
            deliveryAddress.add("formatted");
            deliveryAddress.add("formattedArea");
            deliveryAddress.add("lastName");
            deliveryAddress.add("latitude");
            deliveryAddress.add("longitude");
            deliveryAddress.add("name");
            deliveryAddress.add("phone");
            deliveryAddress.add("province");
            deliveryAddress.add("provinceCode");
          });
          node.add("deliveryOptions", function (deliveryOptions) {
            deliveryOptions.add("code");
            deliveryOptions.add("deliveryMethodType");
            deliveryOptions.add("description");
            deliveryOptions.add("estimatedCost", function (estimatedCost) {
              estimatedCost.add("amount");
              estimatedCost.add("currencyCode");
            });
            deliveryOptions.add("handle");
            deliveryOptions.add("title");
          });
          node.add("selectedDeliveryOption", function (selectedDeliveryOption) {
            selectedDeliveryOption.add("code");
            selectedDeliveryOption.add("deliveryMethodType");
            selectedDeliveryOption.add("description");
            selectedDeliveryOption.add("estimatedCost", function (estimatedCost) {
              estimatedCost.add("amount");
              estimatedCost.add("currencyCode");
            });
            selectedDeliveryOption.add("handle");
            selectedDeliveryOption.add("title");
          });
          node.add("cartLines", {
            args: {
              first: 250
            }
          }, function (cartLines) {
            cartLines.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            cartLines.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("id");
              });
            });
          });
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("note");
  });
  spreads.CartUserErrorFragment = document.defineFragment("CartUserErrorFragment", "CartUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.CartWarningFragment = document.defineFragment("CartWarningFragment", "CartWarning", function (root) {
    root.add("code");
    root.add("message");
  });
  document.addMutation("CartGiftCardCodesRemove", [variables.CartGiftCardCodesRemove.appliedGiftCardIds, variables.CartGiftCardCodesRemove.cartId], function (root) {
    root.add("cartGiftCardCodesRemove", {
      args: {
        appliedGiftCardIds: variables.CartGiftCardCodesRemove.appliedGiftCardIds,
        cartId: variables.CartGiftCardCodesRemove.cartId
      }
    }, function (cartGiftCardCodesRemove) {
      cartGiftCardCodesRemove.add("cart", function (cart) {
        cart.addFragment(spreads.CartFragment);
      });
      cartGiftCardCodesRemove.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.CartUserErrorFragment);
      });
      cartGiftCardCodesRemove.add("warnings", function (warnings) {
        warnings.addFragment(spreads.CartWarningFragment);
      });
    });
  }, client.internationalizationDirective);
  return document;
}

/**
 * The JS Buy SDK cart resource
 * @class
 */

var CheckoutResource = function (_Resource) {
  inherits$1(CheckoutResource, _Resource);

  function CheckoutResource() {
    classCallCheck$1(this, CheckoutResource);
    return possibleConstructorReturn$1(this, (CheckoutResource.__proto__ || Object.getPrototypeOf(CheckoutResource)).apply(this, arguments));
  }

  createClass$1(CheckoutResource, [{
    key: 'fetch',


    /**
     * Fetches a card by ID.
     *
     * @example
     * client.cart.fetch('FlZj9rZXlN5MDY4ZDFiZTUyZTUwNTE2MDNhZjg=').then((cart) => {
     *   // Do something with the cart
     * });
     *
     * @param {String} id The id of the card to fetch.
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the cart.
     */
    value: function fetch(id) {
      var _this2 = this;

      return this.graphQLClient.send(query$13, { id: id }).then(function (_ref) {
        var model = _ref.model,
            data = _ref.data;

        return new Promise(function (resolve, reject) {
          try {
            var cart = data.cart || data.node;

            if (!cart) {
              return resolve(null);
            }

            return _this2.graphQLClient.fetchAllPages(model.cart.lines, { pageSize: 250 }).then(function (lines) {
              model.cart.attrs.lines = lines;

              return resolve(mapCartPayload(model.cart));
            });
          } catch (error) {
            if (error) {
              reject(error);
            } else {
              reject([{ message: 'an unknown error has occurred.' }]);
            }
          }

          return resolve(null);
        });
      });
    }

    /**
     * Creates a checkout.
     *
     * @example
     * const input = {
     *   lineItems: [
     *     {variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTEwNjAyMjc5Mg==', quantity: 5}
     *   ]
     * };
     *
     * client.checkout.create(input).then((checkout) => {
     *   // Do something with the newly created checkout
     * });
     *
     * @param {Object} [input] An input object containing zero or more of:
     *   @param {String} [input.email] An email connected to the checkout.
     *   @param {Object[]} [input.lineItems] A list of line items in the checkout. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/checkoutlineiteminput|Storefront API reference} for valid input fields for each line item.
     *   @param {Object} [input.shippingAddress] A shipping address. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/mailingaddressinput|Storefront API reference} for valid input fields.
     *   @param {String} [input.note] A note for the checkout.
     *   @param {Object[]} [input.customAttributes] A list of custom attributes for the checkout. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/attributeinput|Storefront API reference} for valid input fields.
     *   @deprecated {String} [input.presentmentCurrencyCode ] A presentment currency code. See the {@link https://help.shopify.com/en/api/storefront-api/reference/enum/currencycode|Storefront API reference} for valid currency code values.
     *   @return {Promise|GraphModel} A promise resolving with the created checkout.
     */

  }, {
    key: 'create',
    value: function create() {
      var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var input = this.inputMapper.create(i);

      return this.graphQLClient.send(query$14, { input: input }).then(handleCartMutation('cartCreate', this.graphQLClient));
    }

    /**
     * Replaces the value of checkout's custom attributes and/or note with values defined in the input
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const input = {customAttributes: [{key: "MyKey", value: "MyValue"}]};
     *
     * client.checkout.updateAttributes(checkoutId, input).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to update.
     * @param {Object} [input] An input object containing zero or more of:
     *   @param {Object[]} [input.customAttributes] A list of custom attributes for the checkout. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/attributeinput|Storefront API reference} for valid input fields.
     *   @param {String} [input.note] A note for the checkout.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'updateAttributes',
    value: function updateAttributes(checkoutId) {
      var _this3 = this;

      var input = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _inputMapper$updateAt = this.inputMapper.updateAttributes(checkoutId, input),
          cartAttributesUpdateInput = _inputMapper$updateAt.cartAttributesUpdateInput,
          cartNoteUpdateInput = _inputMapper$updateAt.cartNoteUpdateInput;

      var promise = Promise.resolve();

      function updateNote() {
        return this.graphQLClient.send(query$22, cartNoteUpdateInput).then(handleCartMutation('cartNoteUpdate', this.graphQLClient));
      }

      function updateAttributes() {
        return this.graphQLClient.send(query$15, cartAttributesUpdateInput).then(handleCartMutation('cartAttributesUpdate', this.graphQLClient));
      }

      if (typeof cartNoteUpdateInput.note !== 'undefined') {
        promise = promise.then(function () {
          return updateNote.call(_this3);
        });
      }

      if (cartAttributesUpdateInput.attributes.length) {
        promise = promise.then(function () {
          return updateAttributes.call(_this3);
        });
      }

      return promise;
    }

    /**
     * Replaces the value of checkout's email address
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const email = 'user@example.com';
     *
     * client.checkout.updateEmail(checkoutId, email).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to update.
     * @param {String} email The email address to apply to the checkout.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'updateEmail',
    value: function updateEmail(checkoutId, email) {
      var variables = this.inputMapper.updateEmail(checkoutId, email);

      return this.graphQLClient.send(query$16, variables).then(handleCartMutation('cartBuyerIdentityUpdate', this.graphQLClient));
    }

    /**
     * Adds line items to an existing checkout.
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const lineItems = [{variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTEwNjAyMjc5Mg==', quantity: 5}];
     *
     * client.checkout.addLineItems(checkoutId, lineItems).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to add line items to.
     * @param {Object[]} lineItems A list of line items to add to the checkout. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/checkoutlineiteminput|Storefront API reference} for valid input fields for each line item.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'addLineItems',
    value: function addLineItems(checkoutId) {
      var lineItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var variables = this.inputMapper.addLineItems(checkoutId, lineItems);

      return this.graphQLClient.send(query$19, variables).then(handleCartMutation('cartLinesAdd', this.graphQLClient));
    }

    /**
     * Applies a discount to an existing checkout using a discount code.
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const discountCode = 'best-discount-ever';
     *
     * client.checkout.addDiscount(checkoutId, discountCode).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to add discount to.
     * @param {String} discountCode The discount code to apply to the checkout.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'addDiscount',
    value: function addDiscount(checkoutId, discountCode) {
      var _this4 = this;

      return this.fetch(checkoutId).then(function (checkout) {
        var existingRootCodes = checkout.discountApplications.map(function (discountApplication) {
          return discountApplication.code;
        });

        var existingLineCodes = checkout.lineItems.map(function (lineItem) {
          return lineItem.discountAllocations.map(function (_ref2) {
            var discountApplication = _ref2.discountApplication;
            return discountApplication.code;
          });
        });

        // get unique applied codes
        var existingCodes = Array.from(new Set([].concat(toConsumableArray$1(existingRootCodes), toConsumableArray$1(existingLineCodes.flat()))));

        var variables = _this4.inputMapper.addDiscount(checkoutId, existingCodes.concat(discountCode));

        return _this4.graphQLClient.send(query$17, variables).then(handleCartMutation('cartDiscountCodesUpdate', _this4.graphQLClient));
      });
    }

    /**
     * Removes the applied discount from an existing checkout.
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     *
     * client.checkout.removeDiscount(checkoutId).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to remove the discount from.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'removeDiscount',
    value: function removeDiscount(checkoutId) {
      var variables = this.inputMapper.removeDiscount(checkoutId);

      return this.graphQLClient.send(query$17, variables).then(handleCartMutation('cartDiscountCodesUpdate', this.graphQLClient));
    }

    /**
     * Applies gift cards to an existing checkout using a list of gift card codes
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const giftCardCodes = ['6FD8853DAGAA949F'];
     *
     * client.checkout.addGiftCards(checkoutId, giftCardCodes).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to add gift cards to.
     * @param {String[]} giftCardCodes The gift card codes to apply to the checkout.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'addGiftCards',
    value: function addGiftCards(checkoutId, giftCardCodes) {
      var variables = this.inputMapper.addGiftCards(checkoutId, giftCardCodes);

      return this.graphQLClient.send(query$18, variables).then(handleCartMutation('cartGiftCardCodesUpdate', this.graphQLClient));
    }

    /**
     * Remove a gift card from an existing checkout
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const appliedGiftCardId = 'Z2lkOi8vc2hvcGlmeS9BcHBsaWVkR2lmdENhcmQvNDI4NTQ1ODAzMTI=';
     *
     * client.checkout.removeGiftCard(checkoutId, appliedGiftCardId).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to add gift cards to.
     * @param {String} appliedGiftCardId The gift card id to remove from the checkout.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'removeGiftCard',
    value: function removeGiftCard(checkoutId, appliedGiftCardId) {
      var variables = this.inputMapper.removeGiftCard(checkoutId, appliedGiftCardId);

      return this.graphQLClient.send(query$23, variables).then(handleCartMutation('cartGiftCardCodesRemove', this.graphQLClient));
    }

    /**
     * Removes line items from an existing checkout.
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const lineItemIds = ['TViZGE5Y2U1ZDFhY2FiMmM2YT9rZXk9NTc2YjBhODcwNWIxYzg0YjE5ZjRmZGQ5NjczNGVkZGU='];
     *
     * client.checkout.removeLineItems(checkoutId, lineItemIds).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to remove line items from.
     * @param {String[]} lineItemIds A list of the ids of line items to remove from the checkout.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'removeLineItems',
    value: function removeLineItems(checkoutId) {
      var lineIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var variables = this.inputMapper.removeLineItems(checkoutId, lineIds);

      return this.graphQLClient.send(query$20, variables).then(handleCartMutation('cartLinesRemove', this.graphQLClient));
    }

    /**
     * Replace line items on an existing checkout.
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const lineItems = [{variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTEwNjAyMjc5Mg==', quantity: 5}];
     *
     * client.checkout.replaceLineItems(checkoutId, lineItems).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to add line items to.
     * @param {Object[]} lineItems A list of line items to set on the checkout. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/checkoutlineiteminput|Storefront API reference} for valid input fields for each line item.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'replaceLineItems',
    value: function replaceLineItems(checkoutId, lineItems) {
      var _this5 = this;

      return this.fetch(checkoutId).then(function (checkout) {
        var lineIds = checkout.lineItems.map(function (lineItem) {
          return lineItem.id;
        });

        return _this5.removeLineItems(checkoutId, lineIds);
      }).then(function () {
        return _this5.addLineItems(checkoutId, lineItems);
      });
    }

    /**
     * Updates line items on an existing checkout.
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const lineItems = [
     *   {
     *     id: 'TViZGE5Y2U1ZDFhY2FiMmM2YT9rZXk9NTc2YjBhODcwNWIxYzg0YjE5ZjRmZGQ5NjczNGVkZGU=',
     *     quantity: 5,
     *     variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTEwNjAyMjc5Mg=='
     *   }
     * ];
     *
     * client.checkout.updateLineItems(checkoutId, lineItems).then(checkout => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to update a line item on.
     * @param {Object[]} lineItems A list of line item information to update. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/checkoutlineitemupdateinput|Storefront API reference} for valid input fields for each line item.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'updateLineItems',
    value: function updateLineItems(checkoutId, lineItems) {
      var variables = this.inputMapper.updateLineItems(checkoutId, lineItems);

      return this.graphQLClient.send(query$21, variables).then(handleCartMutation('cartLinesUpdate', this.graphQLClient));
    }

    /**
     * Updates shipping address on an existing checkout.
     *
     * @example
     * const checkoutId = `'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const shippingAddress = {
     *    address1: 'Chestnut Street 92',
     *    address2: 'Apartment 2',
     *    city: 'Louisville',
     *    company: null,
     *    country: 'United States',
     *    firstName: 'Bob',
     *    lastName: 'Norman',
     *    phone: '555-625-1199',
     *    province: 'Kentucky',
     *    zip: '40202'
     *  };
     *
     * client.checkout.updateShippingAddress(checkoutId, shippingAddress).then(checkout => {
     *   // Do something with the updated checkout
     * });
     *
     * @param  {String} checkoutId The ID of the checkout to update shipping address.
     * @param  {Object} shippingAddress A shipping address.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'updateShippingAddress',
    value: function updateShippingAddress(checkoutId, shippingAddress) {
      var variables = this.inputMapper.updateShippingAddress(checkoutId, shippingAddress);

      return this.graphQLClient.send(query$16, variables).then(handleCartMutation('cartBuyerIdentityUpdate', this.graphQLClient));
    }
  }]);
  return CheckoutResource;
}(Resource);

/**
 * @namespace ImageHelpers
 */
var imageHelpers = {

  /**
   * Generates the image src for a resized image with maximum dimensions `maxWidth` and `maxHeight`.
   * Images do not scale up.
   *
   * @example
   * const url = client.image.helpers.imageForSize(product.variants[0].image, {maxWidth: 50, maxHeight: 50});
   *
   * @memberof ImageHelpers
   * @method imageForSize
   * @param {Object} image The original image model to generate the image src for.
   * @param {Object} options An options object containing:
   *  @param {Integer} options.maxWidth The maximum width for the image.
   *  @param {Integer} options.maxHeight The maximum height for the image.
   * @return {String} The image src for the resized image.
   */
  imageForSize: function imageForSize(image, _ref) {
    var maxWidth = _ref.maxWidth,
        maxHeight = _ref.maxHeight;

    var splitUrl = image.src.split('?');
    var notQuery = splitUrl[0];
    var query = splitUrl[1] ? '?' + splitUrl[1] : '';

    // Use the section before the query
    var imageTokens = notQuery.split('.');

    // Take the token before the file extension and append the dimensions
    var imagePathIndex = imageTokens.length - 2;

    imageTokens[imagePathIndex] = imageTokens[imagePathIndex] + '_' + maxWidth + 'x' + maxHeight;

    return '' + imageTokens.join('.') + query;
  }
};

/**
 * The JS Buy SDK image resource
 * @class
 */

var ImageResource = function (_Resource) {
  inherits$1(ImageResource, _Resource);

  function ImageResource() {
    classCallCheck$1(this, ImageResource);
    return possibleConstructorReturn$1(this, (ImageResource.__proto__ || Object.getPrototypeOf(ImageResource)).apply(this, arguments));
  }

  createClass$1(ImageResource, [{
    key: 'helpers',
    get: function get$$1() {
      return imageHelpers;
    }
  }]);
  return ImageResource;
}(Resource);

var version = "2.22.0";

var AppliedGiftCard = {
  "name": "AppliedGiftCard",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "amountUsed": "MoneyV2",
    "balance": "MoneyV2",
    "id": "ID",
    "lastCharacters": "String",
    "presentmentAmountUsed": "MoneyV2"
  },
  "implementsNode": true
};

var Attribute = {
  "name": "Attribute",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "key": "String",
    "value": "String"
  },
  "implementsNode": false
};

var AutomaticDiscountApplication = {
  "name": "AutomaticDiscountApplication",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "title": "String"
  },
  "implementsNode": false
};

var BaseCartLine = {
  "name": "BaseCartLine",
  "kind": "INTERFACE",
  "fieldBaseTypes": {
    "attributes": "Attribute",
    "cost": "CartLineCost",
    "discountAllocations": "CartDiscountAllocation",
    "id": "ID",
    "merchandise": "Merchandise",
    "quantity": "Int"
  },
  "possibleTypes": ["CartLine", "ComponentizableCartLine"]
};

var BaseCartLineConnection = {
  "name": "BaseCartLineConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "BaseCartLineEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var BaseCartLineEdge = {
  "name": "BaseCartLineEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "BaseCartLine"
  },
  "implementsNode": false
};

var Boolean$1 = {
  "name": "Boolean",
  "kind": "SCALAR"
};

var Cart = {
  "name": "Cart",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "appliedGiftCards": "AppliedGiftCard",
    "attributes": "Attribute",
    "buyerIdentity": "CartBuyerIdentity",
    "checkoutUrl": "URL",
    "cost": "CartCost",
    "createdAt": "DateTime",
    "deliveryGroups": "CartDeliveryGroupConnection",
    "discountAllocations": "CartDiscountAllocation",
    "discountCodes": "CartDiscountCode",
    "id": "ID",
    "lines": "BaseCartLineConnection",
    "note": "String",
    "updatedAt": "DateTime"
  },
  "implementsNode": true
};

var CartAttributesUpdatePayload = {
  "name": "CartAttributesUpdatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cart": "Cart",
    "userErrors": "CartUserError",
    "warnings": "CartWarning"
  },
  "implementsNode": false
};

var CartAutomaticDiscountAllocation = {
  "name": "CartAutomaticDiscountAllocation",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "title": "String"
  },
  "implementsNode": false
};

var CartBuyerIdentity = {
  "name": "CartBuyerIdentity",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "countryCode": "CountryCode",
    "customer": "Customer",
    "deliveryAddressPreferences": "DeliveryAddress",
    "email": "String",
    "phone": "String",
    "preferences": "CartPreferences"
  },
  "implementsNode": false
};

var CartBuyerIdentityUpdatePayload = {
  "name": "CartBuyerIdentityUpdatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cart": "Cart",
    "userErrors": "CartUserError",
    "warnings": "CartWarning"
  },
  "implementsNode": false
};

var CartCodeDiscountAllocation = {
  "name": "CartCodeDiscountAllocation",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "code": "String"
  },
  "implementsNode": false
};

var CartCost = {
  "name": "CartCost",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkoutChargeAmount": "MoneyV2",
    "subtotalAmount": "MoneyV2",
    "totalAmount": "MoneyV2",
    "totalDutyAmount": "MoneyV2",
    "totalTaxAmount": "MoneyV2"
  },
  "implementsNode": false
};

var CartCreatePayload = {
  "name": "CartCreatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cart": "Cart",
    "userErrors": "CartUserError",
    "warnings": "CartWarning"
  },
  "implementsNode": false
};

var CartCustomDiscountAllocation = {
  "name": "CartCustomDiscountAllocation",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "title": "String"
  },
  "implementsNode": false
};

var CartDeliveryCoordinatesPreference = {
  "name": "CartDeliveryCoordinatesPreference",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "countryCode": "CountryCode",
    "latitude": "Float",
    "longitude": "Float"
  },
  "implementsNode": false
};

var CartDeliveryGroup = {
  "name": "CartDeliveryGroup",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cartLines": "BaseCartLineConnection",
    "deliveryAddress": "MailingAddress",
    "deliveryOptions": "CartDeliveryOption",
    "id": "ID",
    "selectedDeliveryOption": "CartDeliveryOption"
  },
  "implementsNode": false
};

var CartDeliveryGroupConnection = {
  "name": "CartDeliveryGroupConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "CartDeliveryGroupEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var CartDeliveryGroupEdge = {
  "name": "CartDeliveryGroupEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "node": "CartDeliveryGroup"
  },
  "implementsNode": false
};

var CartDeliveryOption = {
  "name": "CartDeliveryOption",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "code": "String",
    "deliveryMethodType": "DeliveryMethodType",
    "description": "String",
    "estimatedCost": "MoneyV2",
    "handle": "String",
    "title": "String"
  },
  "implementsNode": false
};

var CartDeliveryPreference = {
  "name": "CartDeliveryPreference",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "coordinates": "CartDeliveryCoordinatesPreference",
    "deliveryMethod": "PreferenceDeliveryMethodType",
    "pickupHandle": "String"
  },
  "implementsNode": false
};

var CartDiscountAllocation = {
  "name": "CartDiscountAllocation",
  "kind": "INTERFACE",
  "fieldBaseTypes": {
    "discountApplication": "CartDiscountApplication",
    "discountedAmount": "MoneyV2"
  },
  "possibleTypes": ["CartAutomaticDiscountAllocation", "CartCodeDiscountAllocation", "CartCustomDiscountAllocation"]
};

var CartDiscountApplication = {
  "name": "CartDiscountApplication",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "allocationMethod": "DiscountApplicationAllocationMethod",
    "targetSelection": "DiscountApplicationTargetSelection",
    "targetType": "DiscountApplicationTargetType",
    "value": "PricingValue"
  },
  "implementsNode": false
};

var CartDiscountCode = {
  "name": "CartDiscountCode",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "applicable": "Boolean",
    "code": "String"
  },
  "implementsNode": false
};

var CartDiscountCodesUpdatePayload = {
  "name": "CartDiscountCodesUpdatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cart": "Cart",
    "userErrors": "CartUserError",
    "warnings": "CartWarning"
  },
  "implementsNode": false
};

var CartErrorCode = {
  "name": "CartErrorCode",
  "kind": "ENUM"
};

var CartGiftCardCodesRemovePayload = {
  "name": "CartGiftCardCodesRemovePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cart": "Cart",
    "userErrors": "CartUserError",
    "warnings": "CartWarning"
  },
  "implementsNode": false
};

var CartGiftCardCodesUpdatePayload = {
  "name": "CartGiftCardCodesUpdatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cart": "Cart",
    "userErrors": "CartUserError",
    "warnings": "CartWarning"
  },
  "implementsNode": false
};

var CartLineCost = {
  "name": "CartLineCost",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "amountPerQuantity": "MoneyV2",
    "compareAtAmountPerQuantity": "MoneyV2",
    "subtotalAmount": "MoneyV2",
    "totalAmount": "MoneyV2"
  },
  "implementsNode": false
};

var CartLinesAddPayload = {
  "name": "CartLinesAddPayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cart": "Cart",
    "userErrors": "CartUserError",
    "warnings": "CartWarning"
  },
  "implementsNode": false
};

var CartLinesRemovePayload = {
  "name": "CartLinesRemovePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cart": "Cart",
    "userErrors": "CartUserError",
    "warnings": "CartWarning"
  },
  "implementsNode": false
};

var CartLinesUpdatePayload = {
  "name": "CartLinesUpdatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cart": "Cart",
    "userErrors": "CartUserError",
    "warnings": "CartWarning"
  },
  "implementsNode": false
};

var CartNoteUpdatePayload = {
  "name": "CartNoteUpdatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cart": "Cart",
    "userErrors": "CartUserError"
  },
  "implementsNode": false
};

var CartPreferences = {
  "name": "CartPreferences",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "delivery": "CartDeliveryPreference",
    "wallet": "String"
  },
  "implementsNode": false
};

var CartUserError = {
  "name": "CartUserError",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "code": "CartErrorCode",
    "field": "String",
    "message": "String"
  },
  "implementsNode": false
};

var CartWarning = {
  "name": "CartWarning",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "code": "CartWarningCode",
    "message": "String"
  },
  "implementsNode": false
};

var CartWarningCode = {
  "name": "CartWarningCode",
  "kind": "ENUM"
};

var Collection = {
  "name": "Collection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "description": "String",
    "descriptionHtml": "HTML",
    "handle": "String",
    "id": "ID",
    "image": "Image",
    "products": "ProductConnection",
    "title": "String",
    "updatedAt": "DateTime"
  },
  "implementsNode": true
};

var CollectionConnection = {
  "name": "CollectionConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "CollectionEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var CollectionEdge = {
  "name": "CollectionEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "Collection"
  },
  "implementsNode": false
};

var Country = {
  "name": "Country",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "currency": "Currency",
    "isoCode": "CountryCode",
    "name": "String",
    "unitSystem": "UnitSystem"
  },
  "implementsNode": false
};

var CountryCode = {
  "name": "CountryCode",
  "kind": "ENUM"
};

var Currency = {
  "name": "Currency",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "isoCode": "CurrencyCode",
    "name": "String",
    "symbol": "String"
  },
  "implementsNode": false
};

var CurrencyCode = {
  "name": "CurrencyCode",
  "kind": "ENUM"
};

var Customer = {
  "name": "Customer",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "email": "String"
  },
  "implementsNode": false
};

var DateTime = {
  "name": "DateTime",
  "kind": "SCALAR"
};

var Decimal = {
  "name": "Decimal",
  "kind": "SCALAR"
};

var DeliveryAddress = {
  "name": "DeliveryAddress",
  "kind": "UNION"
};

var DeliveryMethodType = {
  "name": "DeliveryMethodType",
  "kind": "ENUM"
};

var DiscountApplication = {
  "name": "DiscountApplication",
  "kind": "INTERFACE",
  "fieldBaseTypes": {
    "allocationMethod": "DiscountApplicationAllocationMethod",
    "targetSelection": "DiscountApplicationTargetSelection",
    "targetType": "DiscountApplicationTargetType",
    "value": "PricingValue"
  },
  "possibleTypes": ["AutomaticDiscountApplication", "DiscountCodeApplication", "ManualDiscountApplication", "ScriptDiscountApplication"]
};

var DiscountApplicationAllocationMethod = {
  "name": "DiscountApplicationAllocationMethod",
  "kind": "ENUM"
};

var DiscountApplicationTargetSelection = {
  "name": "DiscountApplicationTargetSelection",
  "kind": "ENUM"
};

var DiscountApplicationTargetType = {
  "name": "DiscountApplicationTargetType",
  "kind": "ENUM"
};

var DiscountCodeApplication = {
  "name": "DiscountCodeApplication",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "applicable": "Boolean",
    "code": "String"
  },
  "implementsNode": false
};

var Domain = {
  "name": "Domain",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "host": "String",
    "sslEnabled": "Boolean",
    "url": "URL"
  },
  "implementsNode": false
};

var Float = {
  "name": "Float",
  "kind": "SCALAR"
};

var HTML = {
  "name": "HTML",
  "kind": "SCALAR"
};

var ID = {
  "name": "ID",
  "kind": "SCALAR"
};

var Image = {
  "name": "Image",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "altText": "String",
    "height": "Int",
    "id": "ID",
    "url": "URL",
    "width": "Int"
  },
  "implementsNode": false
};

var ImageConnection = {
  "name": "ImageConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "ImageEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var ImageEdge = {
  "name": "ImageEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "Image"
  },
  "implementsNode": false
};

var Int = {
  "name": "Int",
  "kind": "SCALAR"
};

var Localization = {
  "name": "Localization",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "country": "Country"
  },
  "implementsNode": false
};

var MailingAddress = {
  "name": "MailingAddress",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "address1": "String",
    "address2": "String",
    "city": "String",
    "company": "String",
    "country": "String",
    "countryCodeV2": "CountryCode",
    "firstName": "String",
    "formatted": "String",
    "formattedArea": "String",
    "lastName": "String",
    "latitude": "Float",
    "longitude": "Float",
    "name": "String",
    "phone": "String",
    "province": "String",
    "provinceCode": "String",
    "zip": "String"
  },
  "implementsNode": true
};

var ManualDiscountApplication = {
  "name": "ManualDiscountApplication",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "description": "String",
    "title": "String"
  },
  "implementsNode": false
};

var Merchandise = {
  "name": "Merchandise",
  "kind": "UNION"
};

var MoneyV2 = {
  "name": "MoneyV2",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "amount": "Decimal",
    "currencyCode": "CurrencyCode"
  },
  "implementsNode": false
};

var Mutation$1 = {
  "name": "Mutation",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cartAttributesUpdate": "CartAttributesUpdatePayload",
    "cartBuyerIdentityUpdate": "CartBuyerIdentityUpdatePayload",
    "cartCreate": "CartCreatePayload",
    "cartDiscountCodesUpdate": "CartDiscountCodesUpdatePayload",
    "cartGiftCardCodesRemove": "CartGiftCardCodesRemovePayload",
    "cartGiftCardCodesUpdate": "CartGiftCardCodesUpdatePayload",
    "cartLinesAdd": "CartLinesAddPayload",
    "cartLinesRemove": "CartLinesRemovePayload",
    "cartLinesUpdate": "CartLinesUpdatePayload",
    "cartNoteUpdate": "CartNoteUpdatePayload"
  },
  "implementsNode": false,
  "relayInputObjectBaseTypes": {
    "cartCreate": "CartInput",
    "cartMetafieldDelete": "CartMetafieldDeleteInput",
    "customerAccessTokenCreate": "CustomerAccessTokenCreateInput",
    "customerActivate": "CustomerActivateInput",
    "customerCreate": "CustomerCreateInput",
    "customerReset": "CustomerResetInput"
  }
};

var Node = {
  "name": "Node",
  "kind": "INTERFACE",
  "fieldBaseTypes": {},
  "possibleTypes": ["AppliedGiftCard", "Article", "Blog", "Cart", "CartLine", "Collection", "Comment", "Company", "CompanyContact", "CompanyLocation", "ComponentizableCartLine", "ExternalVideo", "GenericFile", "Location", "MailingAddress", "Market", "MediaImage", "MediaPresentation", "Menu", "MenuItem", "Metafield", "Metaobject", "Model3d", "Order", "Page", "Product", "ProductOption", "ProductOptionValue", "ProductVariant", "Shop", "ShopPayInstallmentsFinancingPlan", "ShopPayInstallmentsFinancingPlanTerm", "ShopPayInstallmentsProductVariantPricing", "ShopPolicy", "TaxonomyCategory", "UrlRedirect", "Video"]
};

var PageInfo = {
  "name": "PageInfo",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "hasNextPage": "Boolean",
    "hasPreviousPage": "Boolean"
  },
  "implementsNode": false
};

var PaymentSettings = {
  "name": "PaymentSettings",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "enabledPresentmentCurrencies": "CurrencyCode"
  },
  "implementsNode": false
};

var PreferenceDeliveryMethodType = {
  "name": "PreferenceDeliveryMethodType",
  "kind": "ENUM"
};

var PricingPercentageValue = {
  "name": "PricingPercentageValue",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "percentage": "Float"
  },
  "implementsNode": false
};

var PricingValue = {
  "name": "PricingValue",
  "kind": "UNION"
};

var Product = {
  "name": "Product",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "availableForSale": "Boolean",
    "createdAt": "DateTime",
    "description": "String",
    "descriptionHtml": "HTML",
    "handle": "String",
    "id": "ID",
    "images": "ImageConnection",
    "onlineStoreUrl": "URL",
    "options": "ProductOption",
    "productType": "String",
    "publishedAt": "DateTime",
    "requiresSellingPlan": "Boolean",
    "sellingPlanGroups": "SellingPlanGroupConnection",
    "title": "String",
    "updatedAt": "DateTime",
    "variants": "ProductVariantConnection",
    "vendor": "String"
  },
  "implementsNode": true
};

var ProductConnection = {
  "name": "ProductConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "ProductEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var ProductEdge = {
  "name": "ProductEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "Product"
  },
  "implementsNode": false
};

var ProductOption = {
  "name": "ProductOption",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "name": "String",
    "values": "String"
  },
  "implementsNode": true
};

var ProductVariant = {
  "name": "ProductVariant",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "availableForSale": "Boolean",
    "compareAtPrice": "MoneyV2",
    "id": "ID",
    "image": "Image",
    "price": "MoneyV2",
    "product": "Product",
    "selectedOptions": "SelectedOption",
    "sellingPlanAllocations": "SellingPlanAllocationConnection",
    "sku": "String",
    "title": "String",
    "unitPrice": "MoneyV2",
    "unitPriceMeasurement": "UnitPriceMeasurement",
    "weight": "Float"
  },
  "implementsNode": true
};

var ProductVariantConnection = {
  "name": "ProductVariantConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "ProductVariantEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var ProductVariantEdge = {
  "name": "ProductVariantEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "ProductVariant"
  },
  "implementsNode": false
};

var QueryRoot = {
  "name": "QueryRoot",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cart": "Cart",
    "collectionByHandle": "Collection",
    "collections": "CollectionConnection",
    "localization": "Localization",
    "node": "Node",
    "nodes": "Node",
    "productByHandle": "Product",
    "productRecommendations": "Product",
    "products": "ProductConnection",
    "shop": "Shop"
  },
  "implementsNode": false
};

var ScriptDiscountApplication = {
  "name": "ScriptDiscountApplication",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "title": "String"
  },
  "implementsNode": false
};

var SelectedOption = {
  "name": "SelectedOption",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "name": "String",
    "value": "String"
  },
  "implementsNode": false
};

var SellingPlan = {
  "name": "SellingPlan",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "description": "String",
    "id": "ID",
    "name": "String",
    "options": "SellingPlanOption",
    "recurringDeliveries": "Boolean"
  },
  "implementsNode": false
};

var SellingPlanAllocation = {
  "name": "SellingPlanAllocation",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "sellingPlan": "SellingPlan"
  },
  "implementsNode": false
};

var SellingPlanAllocationConnection = {
  "name": "SellingPlanAllocationConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "SellingPlanAllocationEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var SellingPlanAllocationEdge = {
  "name": "SellingPlanAllocationEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "SellingPlanAllocation"
  },
  "implementsNode": false
};

var SellingPlanConnection = {
  "name": "SellingPlanConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "SellingPlanEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var SellingPlanEdge = {
  "name": "SellingPlanEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "SellingPlan"
  },
  "implementsNode": false
};

var SellingPlanGroup = {
  "name": "SellingPlanGroup",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "name": "String",
    "options": "SellingPlanGroupOption",
    "sellingPlans": "SellingPlanConnection"
  },
  "implementsNode": false
};

var SellingPlanGroupConnection = {
  "name": "SellingPlanGroupConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "SellingPlanGroupEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var SellingPlanGroupEdge = {
  "name": "SellingPlanGroupEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "SellingPlanGroup"
  },
  "implementsNode": false
};

var SellingPlanGroupOption = {
  "name": "SellingPlanGroupOption",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "name": "String",
    "values": "String"
  },
  "implementsNode": false
};

var SellingPlanOption = {
  "name": "SellingPlanOption",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "name": "String",
    "value": "String"
  },
  "implementsNode": false
};

var Shop = {
  "name": "Shop",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "description": "String",
    "moneyFormat": "String",
    "name": "String",
    "paymentSettings": "PaymentSettings",
    "primaryDomain": "Domain",
    "privacyPolicy": "ShopPolicy",
    "refundPolicy": "ShopPolicy",
    "termsOfService": "ShopPolicy"
  },
  "implementsNode": true
};

var ShopPolicy = {
  "name": "ShopPolicy",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "body": "String",
    "id": "ID",
    "title": "String",
    "url": "URL"
  },
  "implementsNode": true
};

var String$1 = {
  "name": "String",
  "kind": "SCALAR"
};

var URL = {
  "name": "URL",
  "kind": "SCALAR"
};

var UnitPriceMeasurement = {
  "name": "UnitPriceMeasurement",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "measuredType": "UnitPriceMeasurementMeasuredType",
    "quantityUnit": "UnitPriceMeasurementMeasuredUnit",
    "quantityValue": "Float",
    "referenceUnit": "UnitPriceMeasurementMeasuredUnit",
    "referenceValue": "Int"
  },
  "implementsNode": false
};

var UnitPriceMeasurementMeasuredType = {
  "name": "UnitPriceMeasurementMeasuredType",
  "kind": "ENUM"
};

var UnitPriceMeasurementMeasuredUnit = {
  "name": "UnitPriceMeasurementMeasuredUnit",
  "kind": "ENUM"
};

var UnitSystem = {
  "name": "UnitSystem",
  "kind": "ENUM"
};

var UserError = {
  "name": "UserError",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "field": "String",
    "message": "String"
  },
  "implementsNode": false
};

var Types = {
  types: {}
};
Types.types["AppliedGiftCard"] = AppliedGiftCard;
Types.types["Attribute"] = Attribute;
Types.types["AutomaticDiscountApplication"] = AutomaticDiscountApplication;
Types.types["BaseCartLine"] = BaseCartLine;
Types.types["BaseCartLineConnection"] = BaseCartLineConnection;
Types.types["BaseCartLineEdge"] = BaseCartLineEdge;
Types.types["Boolean"] = Boolean$1;
Types.types["Cart"] = Cart;
Types.types["CartAttributesUpdatePayload"] = CartAttributesUpdatePayload;
Types.types["CartAutomaticDiscountAllocation"] = CartAutomaticDiscountAllocation;
Types.types["CartBuyerIdentity"] = CartBuyerIdentity;
Types.types["CartBuyerIdentityUpdatePayload"] = CartBuyerIdentityUpdatePayload;
Types.types["CartCodeDiscountAllocation"] = CartCodeDiscountAllocation;
Types.types["CartCost"] = CartCost;
Types.types["CartCreatePayload"] = CartCreatePayload;
Types.types["CartCustomDiscountAllocation"] = CartCustomDiscountAllocation;
Types.types["CartDeliveryCoordinatesPreference"] = CartDeliveryCoordinatesPreference;
Types.types["CartDeliveryGroup"] = CartDeliveryGroup;
Types.types["CartDeliveryGroupConnection"] = CartDeliveryGroupConnection;
Types.types["CartDeliveryGroupEdge"] = CartDeliveryGroupEdge;
Types.types["CartDeliveryOption"] = CartDeliveryOption;
Types.types["CartDeliveryPreference"] = CartDeliveryPreference;
Types.types["CartDiscountAllocation"] = CartDiscountAllocation;
Types.types["CartDiscountApplication"] = CartDiscountApplication;
Types.types["CartDiscountCode"] = CartDiscountCode;
Types.types["CartDiscountCodesUpdatePayload"] = CartDiscountCodesUpdatePayload;
Types.types["CartErrorCode"] = CartErrorCode;
Types.types["CartGiftCardCodesRemovePayload"] = CartGiftCardCodesRemovePayload;
Types.types["CartGiftCardCodesUpdatePayload"] = CartGiftCardCodesUpdatePayload;
Types.types["CartLineCost"] = CartLineCost;
Types.types["CartLinesAddPayload"] = CartLinesAddPayload;
Types.types["CartLinesRemovePayload"] = CartLinesRemovePayload;
Types.types["CartLinesUpdatePayload"] = CartLinesUpdatePayload;
Types.types["CartNoteUpdatePayload"] = CartNoteUpdatePayload;
Types.types["CartPreferences"] = CartPreferences;
Types.types["CartUserError"] = CartUserError;
Types.types["CartWarning"] = CartWarning;
Types.types["CartWarningCode"] = CartWarningCode;
Types.types["Collection"] = Collection;
Types.types["CollectionConnection"] = CollectionConnection;
Types.types["CollectionEdge"] = CollectionEdge;
Types.types["Country"] = Country;
Types.types["CountryCode"] = CountryCode;
Types.types["Currency"] = Currency;
Types.types["CurrencyCode"] = CurrencyCode;
Types.types["Customer"] = Customer;
Types.types["DateTime"] = DateTime;
Types.types["Decimal"] = Decimal;
Types.types["DeliveryAddress"] = DeliveryAddress;
Types.types["DeliveryMethodType"] = DeliveryMethodType;
Types.types["DiscountApplication"] = DiscountApplication;
Types.types["DiscountApplicationAllocationMethod"] = DiscountApplicationAllocationMethod;
Types.types["DiscountApplicationTargetSelection"] = DiscountApplicationTargetSelection;
Types.types["DiscountApplicationTargetType"] = DiscountApplicationTargetType;
Types.types["DiscountCodeApplication"] = DiscountCodeApplication;
Types.types["Domain"] = Domain;
Types.types["Float"] = Float;
Types.types["HTML"] = HTML;
Types.types["ID"] = ID;
Types.types["Image"] = Image;
Types.types["ImageConnection"] = ImageConnection;
Types.types["ImageEdge"] = ImageEdge;
Types.types["Int"] = Int;
Types.types["Localization"] = Localization;
Types.types["MailingAddress"] = MailingAddress;
Types.types["ManualDiscountApplication"] = ManualDiscountApplication;
Types.types["Merchandise"] = Merchandise;
Types.types["MoneyV2"] = MoneyV2;
Types.types["Mutation"] = Mutation$1;
Types.types["Node"] = Node;
Types.types["PageInfo"] = PageInfo;
Types.types["PaymentSettings"] = PaymentSettings;
Types.types["PreferenceDeliveryMethodType"] = PreferenceDeliveryMethodType;
Types.types["PricingPercentageValue"] = PricingPercentageValue;
Types.types["PricingValue"] = PricingValue;
Types.types["Product"] = Product;
Types.types["ProductConnection"] = ProductConnection;
Types.types["ProductEdge"] = ProductEdge;
Types.types["ProductOption"] = ProductOption;
Types.types["ProductVariant"] = ProductVariant;
Types.types["ProductVariantConnection"] = ProductVariantConnection;
Types.types["ProductVariantEdge"] = ProductVariantEdge;
Types.types["QueryRoot"] = QueryRoot;
Types.types["ScriptDiscountApplication"] = ScriptDiscountApplication;
Types.types["SelectedOption"] = SelectedOption;
Types.types["SellingPlan"] = SellingPlan;
Types.types["SellingPlanAllocation"] = SellingPlanAllocation;
Types.types["SellingPlanAllocationConnection"] = SellingPlanAllocationConnection;
Types.types["SellingPlanAllocationEdge"] = SellingPlanAllocationEdge;
Types.types["SellingPlanConnection"] = SellingPlanConnection;
Types.types["SellingPlanEdge"] = SellingPlanEdge;
Types.types["SellingPlanGroup"] = SellingPlanGroup;
Types.types["SellingPlanGroupConnection"] = SellingPlanGroupConnection;
Types.types["SellingPlanGroupEdge"] = SellingPlanGroupEdge;
Types.types["SellingPlanGroupOption"] = SellingPlanGroupOption;
Types.types["SellingPlanOption"] = SellingPlanOption;
Types.types["Shop"] = Shop;
Types.types["ShopPolicy"] = ShopPolicy;
Types.types["String"] = String$1;
Types.types["URL"] = URL;
Types.types["UnitPriceMeasurement"] = UnitPriceMeasurement;
Types.types["UnitPriceMeasurementMeasuredType"] = UnitPriceMeasurementMeasuredType;
Types.types["UnitPriceMeasurementMeasuredUnit"] = UnitPriceMeasurementMeasuredUnit;
Types.types["UnitSystem"] = UnitSystem;
Types.types["UserError"] = UserError;
Types.queryType = "QueryRoot";
Types.mutationType = "Mutation";
Types.subscriptionType = null;

function recursivelyFreezeObject(structure) {
  Object.getOwnPropertyNames(structure).forEach(function (key) {
    var value = structure[key];
    if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object') {
      recursivelyFreezeObject(value);
    }
  });
  Object.freeze(structure);
  return structure;
}

var types = recursivelyFreezeObject(Types);

// GraphQL
/**
 * The JS Buy SDK Client.
 * @class
 *
 * @property {ProductResource} product The property under which product fetching methods live.
 * @property {CollectionResource} collection The property under which collection fetching methods live.
 * @property {ShopResource} shop The property under which shop fetching methods live.
 * @property {CartResource} cart The property under which shop fetching and mutating methods live.
 * @property {ImageResource} image The property under which image helper methods live.
 */

var Client = function () {
  createClass$1(Client, null, [{
    key: 'buildClient',


    /**
     * Primary entry point for building a new Client.
     */
    value: function buildClient(config, fetchFunction) {
      var newConfig = new Config(config);
      var client = new Client(newConfig, Client$2, fetchFunction);

      client.config = newConfig;

      return client;
    }

    /**
     * @constructs Client
     * @param {Config} config An instance of {@link Config} used to configure the Client.
     */

  }]);

  function Client(config) {
    var GraphQLClientClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Client$2;
    var fetchFunction = arguments[2];
    classCallCheck$1(this, Client);

    var url = 'https://' + config.domain + '/api/2025-01/graphql';

    var headers = {
      'X-SDK-Variant': 'javascript',
      'X-SDK-Version': version,
      'X-Shopify-Storefront-Access-Token': config.storefrontAccessToken
    };

    if (config.source) {
      headers['X-SDK-Variant-Source'] = config.source;
    }

    var languageHeader = config.language ? config.language : '*';

    headers['Accept-Language'] = languageHeader;

    if (fetchFunction) {
      headers['Content-Type'] = 'application/json';
      headers.Accept = 'application/json';

      this.graphQLClient = new GraphQLClientClass(types, {
        fetcher: function fetcher(graphQLParams) {
          return fetchFunction(url, {
            body: JSON.stringify(graphQLParams),
            method: 'POST',
            mode: 'cors',
            headers: headers
          }).then(function (response) {
            return response.json();
          });
        }
      });
    } else {
      this.graphQLClient = new GraphQLClientClass(types, {
        url: url,
        fetcherOptions: { headers: headers }
      });
    }

    this.product = new ProductResource(this.graphQLClient);
    this.collection = new CollectionResource(this.graphQLClient);
    this.shop = new ShopResource(this.graphQLClient);
    this.checkout = new CheckoutResource(this.graphQLClient);
    this.image = new ImageResource(this.graphQLClient);
  }

  /**
   * Fetches the next page of models
   *
   * @example
   * client.fetchNextPage(products).then((nextProducts) => {
   *   // Do something with the products
   * });
   *
   * @param {models} [Array] The paginated set to fetch the next page of
   * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the type provided.
   */


  createClass$1(Client, [{
    key: 'fetchNextPage',
    value: function fetchNextPage(models) {
      return this.graphQLClient.fetchNextPage(models);
    }
  }]);
  return Client;
}();

export default Client;
//# sourceMappingURL=index.es.js.map
