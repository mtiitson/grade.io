package ee.mtiitson.gradeio.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import ee.mtiitson.gradeio.jackson.LabAuthorsDeserializer;
import lombok.*;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Set;

import static javax.persistence.GenerationType.AUTO;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Getter
@Setter
@Component
//@JsonDeserialize(using = LabAuthorsDeserializer.class)
public class Lab extends Work {

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private LabName labName;

    @ManyToMany
    @JoinTable(
            name = "LAB_STUDENT",
            joinColumns = @JoinColumn(name = "LAB_ID", referencedColumnName = "ID"),
            inverseJoinColumns = @JoinColumn(name = "STUDENT_NAME", referencedColumnName = "NAME")
    )
    private Set<Student> authors;

    @Column(nullable = false)
    private String submission;


    @Override
    public Grade getGrade() {
        if (grade == null)  {
            grade = new Grade();
            grade.setCriteria(new ArrayList<Criterion>(Arrays.asList(new Criterion("Esitatud"))) {
            });
        }
        return grade;
    }

}
