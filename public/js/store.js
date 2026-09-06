window.FitStore=(()=>{
const KEY="fitnova_pro_v7";
const EMPTY={onboarded:false,profile:null,plan:null,logs:{workouts:[],weights:[]},chat:[],customExercises:[],customFoods:[],theme:"neonGreen",foodPlan:null};
function normalize(x){const v=x&&typeof x==="object"?x:{};return {...EMPTY,...v,onboarded:Boolean(v.onboarded),profile:v.profile&&typeof v.profile==="object"?v.profile:null,plan:Array.isArray(v.plan)?v.plan:null,foodPlan:Array.isArray(v.foodPlan)?v.foodPlan:null,logs:{...EMPTY.logs,...(v.logs&&typeof v.logs==="object"?v.logs:{})},customExercises:Array.isArray(v.customExercises)?v.customExercises:[],customFoods:Array.isArray(v.customFoods)?v.customFoods:[],chat:Array.isArray(v.chat)?v.chat:[]}}
function load(){try{let raw=localStorage.getItem(KEY);if(!raw){for(const k of ["fitnova_pro_v6","fitnova_pro_v5","fitnova_pro_v4","fitnova_pro_v3"]){raw=localStorage.getItem(k);if(raw)break}}const value=normalize(raw?JSON.parse(raw):EMPTY);if(raw&&!localStorage.getItem(KEY))localStorage.setItem(KEY,JSON.stringify(value));return value}catch{return normalize(EMPTY)}}
let state=load();
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));return true}catch(e){try{localStorage.setItem(KEY,JSON.stringify({...state,chat:(state.chat||[]).slice(-12)}));return true}catch{return false}}}
function get(){return state} function patch(x){state=normalize({...state,...x});save();return state}
function reset(){state=normalize(EMPTY);save();return state}
return {get,save,patch,reset}})();
