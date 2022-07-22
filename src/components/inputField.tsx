import  React,{useRef} from "react";
import "./styles.css";

interface IInputFieldProps {
  todo:string,
  setTodo:React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e:React.FormEvent)=>void;
}

const InputField: React.FunctionComponent<IInputFieldProps> = ({todo,setTodo,handleAdd}) => {
  const input = useRef<HTMLInputElement|null>(null)
  return (
    <>
      <form className="input" onSubmit={(e)=>handleAdd(e)}>
        <input
          type="input"
          placeholder="enter the task"
          className="input__box"
          value={todo}
          onChange={((e)=>setTodo(e.target.value))}
          ref={input}
        />
        <button type="submit" className="input_submit">
          GO
        </button>
      </form>
    </>
  );
};

export default InputField;
