interface Array<T> {
  /**
   * Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
   */
  length: number;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /**
   * Returns a string representation of an array. The elements are converted to string using their toLocalString methods.
   */
  toLocaleString(): string;
  /**
   * Removes the last element from an array and returns it.
   */
  pop(): T | undefined;
  /**
   * Appends new elements to an array, and returns the new length of the array.
   * @param items New elements of the Array.
   */
  push(...items: T[]): number;
  /**
   * Combines two or more arrays.
   * @param items Additional items to add to the end of array1.
   */
  concat(...items: Array<ConcatArray<T>>): T[];
  /**
   * Combines two or more arrays.
   * @param items Additional items to add to the end of array1.
   */
  concat(...items: Array<T | ConcatArray<T>>): T[];
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): T[];
  /**
   * Removes the first element from an array and returns it.
   */
  shift(): T | undefined;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): T[];
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: T, b: T) => number): this;
  /**
   * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @param start The zero-based location in the array from which to start removing elements.
   * @param deleteCount The number of elements to remove.
   */
  splice(start: number, deleteCount?: number): T[];
  /**
   * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @param start The zero-based location in the array from which to start removing elements.
   * @param deleteCount The number of elements to remove.
   * @param items Elements to insert into the array in place of the deleted elements.
   */
  splice(start: number, deleteCount: number, ...items: T[]): T[];
  /**
   * Inserts new elements at the start of an array.
   * @param items  Elements to insert at the start of the Array.
   */
  unshift(...items: T[]): number;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf(searchElement: T, fromIndex?: number): number;
  /**
   * Returns the index of the last occurrence of a specified value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
   */
  lastIndexOf(searchElement: T, fromIndex?: number): number;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): boolean;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): boolean;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): U[];
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter<S extends T>(
    callbackfn: (value: T, index: number, array: T[]) => value is S,
    thisArg?: any
  ): S[];
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): T[];
  /**
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T
  ): T;
  reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T,
    initialValue: T
  ): T;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => U,
    initialValue: U
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T
  ): T;
  reduceRight(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T,
    initialValue: T
  ): T;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => U,
    initialValue: U
  ): U;

  [n: number]: T;
}

interface ArrayConstructor {
  (arrayLength?: number): any[];
  <T>(arrayLength: number): T[];
  <T>(...items: T[]): T[];
  readonly prototype: any[];
  new (arrayLength?: number): any[];
  new <T>(arrayLength: number): T[];
  new <T>(...items: T[]): T[];
  isArray(arg: any): arg is any[];
}

declare var Array: ArrayConstructor;

interface Boolean {
  /** Returns the primitive value of the specified object. */
  valueOf(): boolean;
}

interface BooleanConstructor {
  <T>(value?: T): boolean;
  readonly prototype: Boolean;
  new (value?: any): Boolean;
}

declare var Boolean: BooleanConstructor;

interface CallableFunction extends Function {
  /**
   * Calls the function with the specified object as the this value and the elements of specified array as the arguments.
   * @param thisArg The object to be used as the this object.
   * @param args An array of argument values to be passed to the function.
   */
  apply<T, R>(this: (this: T) => R, thisArg: T): R;
  apply<T, A extends any[], R>(
    this: (this: T, ...args: A) => R,
    thisArg: T,
    args: A
  ): R;

  /**
   * Calls the function with the specified object as the this value and the specified rest arguments as the arguments.
   * @param thisArg The object to be used as the this object.
   * @param args Argument values to be passed to the function.
   */
  call<T, A extends any[], R>(
    this: (this: T, ...args: A) => R,
    thisArg: T,
    ...args: A
  ): R;

  /**
   * For a given function, creates a bound function that has the same body as the original function.
   * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg The object to be used as the this object.
   * @param args Arguments to bind to the parameters of the function.
   */
  bind<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>;
  bind<T, A0, A extends any[], R>(
    this: (this: T, arg0: A0, ...args: A) => R,
    thisArg: T,
    arg0: A0
  ): (...args: A) => R;
  bind<T, A0, A1, A extends any[], R>(
    this: (this: T, arg0: A0, arg1: A1, ...args: A) => R,
    thisArg: T,
    arg0: A0,
    arg1: A1
  ): (...args: A) => R;
  bind<T, A0, A1, A2, A extends any[], R>(
    this: (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R,
    thisArg: T,
    arg0: A0,
    arg1: A1,
    arg2: A2
  ): (...args: A) => R;
  bind<T, A0, A1, A2, A3, A extends any[], R>(
    this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R,
    thisArg: T,
    arg0: A0,
    arg1: A1,
    arg2: A2,
    arg3: A3
  ): (...args: A) => R;
  bind<T, AX, R>(
    this: (this: T, ...args: AX[]) => R,
    thisArg: T,
    ...args: AX[]
  ): (...args: AX[]) => R;
}

/**
 * Creates a new function.
 */
interface Function {
  prototype: any;
  readonly length: number;

  // Non-standard extensions
  arguments: any;
  caller: Function;
  /**
   * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
   * @param thisArg The object to be used as the this object.
   * @param argArray A set of arguments to be passed to the function.
   */
  apply(this: Function, thisArg: any, argArray?: any): any;

  /**
   * Calls a method of an object, substituting another object for the current object.
   * @param thisArg The object to be used as the current object.
   * @param argArray A list of arguments to be passed to the method.
   */
  call(this: Function, thisArg: any, ...argArray: any[]): any;

  /**
   * For a given function, creates a bound function that has the same body as the original function.
   * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg An object to which the this keyword can refer inside the new function.
   * @param argArray A list of arguments to be passed to the new function.
   */
  bind(this: Function, thisArg: any, ...argArray: any[]): any;

  /** Returns a string representation of a function. */
  toString(): string;
}

interface FunctionConstructor {
  (...args: string[]): Function;
  readonly prototype: Function;
  /**
   * Creates a new function.
   * @param args A list of arguments the function accepts.
   */
  new (...args: string[]): Function;
}

declare var Function: FunctionConstructor;

interface IArguments {
  [index: number]: any;
  length: number;
  callee: Function;
}

interface NewableFunction extends Function {
  /**
   * Calls the function with the specified object as the this value and the elements of specified array as the arguments.
   * @param thisArg The object to be used as the this object.
   * @param args An array of argument values to be passed to the function.
   */
  apply<T>(this: new () => T, thisArg: T): void;
  apply<T, A extends any[]>(
    this: new (...args: A) => T,
    thisArg: T,
    args: A
  ): void;

  /**
   * Calls the function with the specified object as the this value and the specified rest arguments as the arguments.
   * @param thisArg The object to be used as the this object.
   * @param args Argument values to be passed to the function.
   */
  call<T, A extends any[]>(
    this: new (...args: A) => T,
    thisArg: T,
    ...args: A
  ): void;

  /**
   * For a given function, creates a bound function that has the same body as the original function.
   * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg The object to be used as the this object.
   * @param args Arguments to bind to the parameters of the function.
   */
  bind<T>(this: T, thisArg: any): T;
  bind<A0, A extends any[], R>(
    this: new (arg0: A0, ...args: A) => R,
    thisArg: any,
    arg0: A0
  ): new (...args: A) => R;
  bind<A0, A1, A extends any[], R>(
    this: new (arg0: A0, arg1: A1, ...args: A) => R,
    thisArg: any,
    arg0: A0,
    arg1: A1
  ): new (...args: A) => R;
  bind<A0, A1, A2, A extends any[], R>(
    this: new (arg0: A0, arg1: A1, arg2: A2, ...args: A) => R,
    thisArg: any,
    arg0: A0,
    arg1: A1,
    arg2: A2
  ): new (...args: A) => R;
  bind<A0, A1, A2, A3, A extends any[], R>(
    this: new (arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R,
    thisArg: any,
    arg0: A0,
    arg1: A1,
    arg2: A2,
    arg3: A3
  ): new (...args: A) => R;
  bind<AX, R>(
    this: new (...args: AX[]) => R,
    thisArg: any,
    ...args: AX[]
  ): new (...args: AX[]) => R;
}

interface Number {
  /**
   * Returns a string representation of an object.
   * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
   */
  toString(radix?: number): string;

  /**
   * Returns a string representing a number in fixed-point notation.
   * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
   */
  toFixed(fractionDigits?: number): string;

  /**
   * Returns a string containing a number represented in exponential notation.
   * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
   */
  toExponential(fractionDigits?: number): string;

  /**
   * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
   * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.
   */
  toPrecision(precision?: number): string;

  /** Returns the primitive value of the specified object. */
  valueOf(): number;
}

interface NumberConstructor {
  (value?: any): number;
  readonly prototype: Number;

  /** The largest number that can be represented in JavaScript. Equal to approximately 1.79E+308. */
  readonly MAX_VALUE: number;

  /** The closest number to zero that can be represented in JavaScript. Equal to approximately 5.00E-324. */
  readonly MIN_VALUE: number;

  /**
   * A value that is not a number.
   * In equality comparisons, NaN does not equal any value, including itself. To test whether a value is equivalent to NaN, use the isNaN function.
   */
  readonly NaN: number;

  /**
   * A value that is less than the largest negative number that can be represented in JavaScript.
   * JavaScript displays NEGATIVE_INFINITY values as -infinity.
   */
  readonly NEGATIVE_INFINITY: number;

  /**
   * A value greater than the largest number that can be represented in JavaScript.
   * JavaScript displays POSITIVE_INFINITY values as infinity.
   */
  readonly POSITIVE_INFINITY: number;
  new (value?: any): Number;
}

/** An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers. */
declare var Number: NumberConstructor;

interface Object {
  /** The initial value of Object.prototype.constructor is the standard built-in Object constructor. */
  constructor: Function;

  /** Returns a string representation of an object. */
  toString(): string;

  /** Returns a date converted to a string using the current locale. */
  toLocaleString(): string;

  /** Returns the primitive value of the specified object. */
  valueOf(): Object;

  /**
   * Determines whether an object has a property with the specified name.
   * @param v A property name.
   */
  hasOwnProperty(v: PropertyKey): boolean;

  /**
   * Determines whether an object exists in another object's prototype chain.
   * @param v Another object whose prototype chain is to be checked.
   */
  isPrototypeOf(v: Object): boolean;

  /**
   * Determines whether a specified property is enumerable.
   * @param v A property name.
   */
  propertyIsEnumerable(v: PropertyKey): boolean;
}

interface ObjectConstructor {
  (): any;
  (value: any): any;

  /** A reference to the prototype for a class of objects. */
  readonly prototype: Object;
  new (value?: any): Object;

  /**
   * Returns the prototype of an object.
   * @param o The object that references the prototype.
   */
  getPrototypeOf(o: any): any;

  /**
   * Gets the own property descriptor of the specified object.
   * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
   * @param o Object that contains the property.
   * @param p Name of the property.
   */
  getOwnPropertyDescriptor(
    o: any,
    p: PropertyKey
  ): PropertyDescriptor | undefined;

  /**
   * Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
   * on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.
   * @param o Object that contains the own properties.
   */
  getOwnPropertyNames(o: any): string[];

  /**
   * Creates an object that has the specified prototype or that has null prototype.
   * @param o Object to use as a prototype. May be null.
   */
  create(o: object | null): any;

  /**
   * Creates an object that has the specified prototype, and that optionally contains specified properties.
   * @param o Object to use as a prototype. May be null
   * @param properties JavaScript object that contains one or more property descriptors.
   */
  create(
    o: object | null,
    properties: PropertyDescriptorMap & ThisType<any>
  ): any;

  /**
   * Adds a property to an object, or modifies attributes of an existing property.
   * @param o Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
   * @param p The property name.
   * @param attributes Descriptor for the property. It can be for a data property or an accessor property.
   */
  defineProperty(
    o: any,
    p: PropertyKey,
    attributes: PropertyDescriptor & ThisType<any>
  ): any;

  /**
   * Adds one or more properties to an object, and/or modifies attributes of existing properties.
   * @param o Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.
   * @param properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
   */
  defineProperties(
    o: any,
    properties: PropertyDescriptorMap & ThisType<any>
  ): any;

  /**
   * Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
   * @param o Object on which to lock the attributes.
   */
  seal<T>(o: T): T;

  /**
   * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
   * @param o Object on which to lock the attributes.
   */
  freeze<T>(a: T[]): readonly T[];

  /**
   * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
   * @param o Object on which to lock the attributes.
   */
  freeze<T extends Function>(f: T): T;

  /**
   * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
   * @param o Object on which to lock the attributes.
   */
  freeze<T>(o: T): Readonly<T>;

  /**
   * Prevents the addition of new properties to an object.
   * @param o Object to make non-extensible.
   */
  preventExtensions<T>(o: T): T;

  /**
   * Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.
   * @param o Object to test.
   */
  isSealed(o: any): boolean;

  /**
   * Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.
   * @param o Object to test.
   */
  isFrozen(o: any): boolean;

  /**
   * Returns a value that indicates whether new properties can be added to an object.
   * @param o Object to test.
   */
  isExtensible(o: any): boolean;

  /**
   * Returns the names of the enumerable string properties and methods of an object.
   * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  keys(o: object): string[];
}

/**
 * Provides functionality common to all JavaScript objects.
 */
declare var Object: ObjectConstructor;

interface RegExp {
  /** Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal. */
  readonly source: string;

  /** Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only. */
  readonly global: boolean;

  /** Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only. */
  readonly ignoreCase: boolean;

  /** Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only. */
  readonly multiline: boolean;

  lastIndex: number;
  /**
   * Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.
   * @param string The String object or string literal on which to perform the search.
   */
  exec(string: string): RegExpExecArray | null;

  /**
   * Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
   * @param string String on which to perform the search.
   */
  test(string: string): boolean;

  // Non-standard extensions
  compile(): this;
}

interface RegExpConstructor {
  (pattern: RegExp | string): RegExp;
  (pattern: string, flags?: string): RegExp;
  readonly prototype: RegExp;

  // Non-standard extensions
  $1: string;
  $2: string;
  $3: string;
  $4: string;
  $5: string;
  $6: string;
  $7: string;
  $8: string;
  $9: string;
  lastMatch: string;
  new (pattern: RegExp | string): RegExp;
  new (pattern: string, flags?: string): RegExp;
}

declare var RegExp: RegExpConstructor;

interface String {
  readonly [index: number]: string;

  /** Returns the length of a String object. */
  readonly length: number;
  /** Returns a string representation of a string. */
  toString(): string;

  /**
   * Returns the character at the specified index.
   * @param pos The zero-based index of the desired character.
   */
  charAt(pos: number): string;

  /**
   * Returns the Unicode value of the character at the specified location.
   * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
   */
  charCodeAt(index: number): number;

  /**
   * Returns a string that contains the concatenation of two or more strings.
   * @param strings The strings to append to the end of the string.
   */
  concat(...strings: string[]): string;

  /**
   * Returns the position of the first occurrence of a substring.
   * @param searchString The substring to search for in the string
   * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
   */
  indexOf(searchString: string, position?: number): number;

  /**
   * Returns the last occurrence of a substring in the string.
   * @param searchString The substring to search for.
   * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.
   */
  lastIndexOf(searchString: string, position?: number): number;

  /**
   * Determines whether two strings are equivalent in the current locale.
   * @param that String to compare to target string
   */
  localeCompare(that: string): number;

  /**
   * Matches a string with a regular expression, and returns an array containing the results of that search.
   * @param regexp A variable name or string literal containing the regular expression pattern and flags.
   */
  match(regexp: string | RegExp): RegExpMatchArray | null;

  /**
   * Replaces text in a string, using a regular expression or search string.
   * @param searchValue A string to search for.
   * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
   */
  replace(searchValue: string | RegExp, replaceValue: string): string;

  /**
   * Replaces text in a string, using a regular expression or search string.
   * @param searchValue A string to search for.
   * @param replacer A function that returns the replacement text.
   */
  replace(
    searchValue: string | RegExp,
    replacer: (substring: string, ...args: any[]) => string
  ): string;

  /**
   * Finds the first substring match in a regular expression search.
   * @param regexp The regular expression pattern and applicable flags.
   */
  search(regexp: string | RegExp): number;

  /**
   * Returns a section of a string.
   * @param start The index to the beginning of the specified portion of stringObj.
   * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
   * If this value is not specified, the substring continues to the end of stringObj.
   */
  slice(start?: number, end?: number): string;

  /**
   * Split a string into substrings using the specified separator and return them as an array.
   * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
   * @param limit A value used to limit the number of elements returned in the array.
   */
  split(separator: string | RegExp, limit?: number): string[];

  /**
   * Returns the substring at the specified location within a String object.
   * @param start The zero-based index number indicating the beginning of the substring.
   * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
   * If end is omitted, the characters from start through the end of the original string are returned.
   */
  substring(start: number, end?: number): string;

  /** Converts all the alphabetic characters in a string to lowercase. */
  toLowerCase(): string;

  /** Converts all alphabetic characters to lowercase, taking into account the host environment's current locale. */
  toLocaleLowerCase(locales?: string | string[]): string;

  /** Converts all the alphabetic characters in a string to uppercase. */
  toUpperCase(): string;

  /** Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale. */
  toLocaleUpperCase(locales?: string | string[]): string;

  /** Removes the leading and trailing white space and line terminator characters from a string. */
  trim(): string;

  // IE extensions
  /**
   * Gets a substring beginning at the specified location and having the specified length.
   * @param from The starting position of the desired substring. The index of the first character in the string is zero.
   * @param length The number of characters to include in the returned substring.
   */
  substr(from: number, length?: number): string;

  /** Returns the primitive value of the specified object. */
  valueOf(): string;
}

interface StringConstructor {
  (value?: any): string;
  readonly prototype: String;
  new (value?: any): String;
  fromCharCode(...codes: number[]): string;
}

/**
 * Allows manipulation and formatting of text strings and determination and location of substrings within strings.
 */
declare var String: StringConstructor;

interface ConcatArray<T> {
  readonly length: number;
  readonly [n: number]: T;
  join(separator?: string): string;
  slice(start?: number, end?: number): T[];
}

/**
 * Extracts the type of the 'this' parameter of a function type, or 'unknown' if the function type has no 'this' parameter.
 */
type ThisParameterType<T> = T extends (this: unknown, ...args: any[]) => any
  ? unknown
  : T extends (this: infer U, ...args: any[]) => any
  ? U
  : unknown;

/**
 * Removes the 'this' parameter from a function type.
 */
type OmitThisParameter<T> = unknown extends ThisParameterType<T>
  ? T
  : T extends (...args: infer A) => infer R
  ? (...args: A) => R
  : T;

declare type PropertyKey = string | number | symbol;

interface PropertyDescriptor {
  configurable?: boolean;
  enumerable?: boolean;
  value?: any;
  writable?: boolean;
  get?(): any;
  set?(v: any): void;
}

interface PropertyDescriptorMap {
  [s: string]: PropertyDescriptor;
}

/**
 * Marker for contextual 'this' type
 */
interface ThisType<T> {}

/**
 * Make all properties in T readonly
 */
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface RegExpMatchArray extends Array<string> {
  index?: number;
  input?: string;
}

interface RegExpExecArray extends Array<string> {
  index: number;
  input: string;
}
