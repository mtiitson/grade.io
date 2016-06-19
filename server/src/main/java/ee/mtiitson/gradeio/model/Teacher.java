package ee.mtiitson.gradeio.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@DiscriminatorValue("TEACHER")
@Entity
@JsonTypeName("teacher")
public class Teacher extends Person{

    public Teacher(String name) {
        super(name, null);
    }

    public Teacher() {
        super();
    }
}
