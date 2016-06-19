package ee.mtiitson.gradeio.model;

import com.fasterxml.jackson.annotation.*;
import com.fasterxml.jackson.annotation.ObjectIdGenerators.PropertyGenerator;
import lombok.*;

import javax.persistence.*;

import static javax.persistence.CascadeType.ALL;
import static javax.persistence.CascadeType.PERSIST;
import static javax.persistence.FetchType.*;
import static javax.persistence.InheritanceType.JOINED;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Inheritance(strategy = JOINED)
@DiscriminatorColumn(name = "PERSON_TYPE")
@JsonTypeInfo(
        use=JsonTypeInfo.Id.NAME,
        include=JsonTypeInfo.As.PROPERTY,
        property="type")
@JsonSubTypes({
        @JsonSubTypes.Type(value=Student.class, name="student"),
        @JsonSubTypes.Type(value=Teacher.class, name="teacher")
})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "name")
public abstract class Person {

    @Id
    protected String name;

    @OneToOne(cascade = ALL, fetch = LAZY)
    @JoinColumn(name = "username")
    @JsonBackReference
    protected User user;

    public Person(String name) {
        this.name = name;
    }
}
