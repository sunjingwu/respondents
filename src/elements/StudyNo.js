
import React, {Component} from 'react';



class StudyNo extends Component{


  render() {

    return (
      <div className="studyNo">

        <table>
          <tbody>
            <tr>
              <td>1</td>
              <td>{this.children}</td>
              <td {...this.attributes}></td>
            </tr>

          </tbody>

        </table>

      </div>
    )
  }
}

export default StudyNo;