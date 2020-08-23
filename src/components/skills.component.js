import React, { Component } from 'react';
import data from "../data"; 

class Skill extends Component {
	render() {
		return (
            <div className="d-row-flex p-3 bg-secondary">
                {
                  data.Skills.map((skill) => {
                    return (
                      <div key={skill.Area} className="p-2 bg-info">
                        <h4 className="font-weight-bold">{skill.Area}</h4>
                        <ul className="list-group">
                          {
                            skill.SkillSet.map((skillDetail) => {
                              return (
                                  <li key={skillDetail.Name} className="list-group-item">
                                    {skillDetail.Name}
                                  </li>
                              );
                            })
                          }
                        </ul>
                      </div>
                    );
                  })
                } 
            </div>
        );
    }
} 
export default Skill;