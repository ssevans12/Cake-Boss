export function LayerForm() {
    return (
        <div>
            <form>
               <label>Height</label>
               <input type="number"></input>

               <label>Width</label>
               <input type="number"></input>

               <label>Color</label>
               <option value=""></option>
               <button>Save</button>
               <button>Cancel</button>
            </form>
        </div>
    )
}