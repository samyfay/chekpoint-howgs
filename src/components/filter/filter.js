
import { TextField } from '@material-ui/core'
import './filter.css'


const Filter = () => {
    return(
        <div className={'h-filter'} >
            <TextField label="Title"
                      variant="outlined" />
            <TextField label="Rating"
                       variant="outlined" />
            <button variant="contained"
            color="primary">
                Filter
                </button>           
        </div>
    )
}
export default Filter