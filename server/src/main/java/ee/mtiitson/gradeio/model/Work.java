package ee.mtiitson.gradeio.model;

import com.fasterxml.jackson.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import java.util.Date;

import static javax.persistence.CascadeType.ALL;
import static javax.persistence.FetchType.EAGER;
import static javax.persistence.FetchType.LAZY;
import static javax.persistence.GenerationType.AUTO;
import static javax.persistence.InheritanceType.JOINED;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Inheritance(strategy = JOINED)
@DiscriminatorColumn(name = "WORK_TYPE")
@JsonTypeInfo(
        use=JsonTypeInfo.Id.NAME,
        include=JsonTypeInfo.As.PROPERTY,
        property="type")
@JsonSubTypes({
        @JsonSubTypes.Type(value=Lab.class, name="lab"),
})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public abstract class Work {
    @Id
    @GeneratedValue(strategy = AUTO)
    private long id;

    @Column
    private Date creationDate = new Date();

    @OneToOne(cascade = ALL, fetch = EAGER)
    @JoinColumn(name = "GRADE_ID")
    @JsonBackReference
    protected Grade grade;

    private boolean graded = false;

    public void setGrade(Grade grade) {
        this.grade = grade;
        graded = true;
    }
}
